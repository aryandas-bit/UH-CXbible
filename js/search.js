// Search functionality for CodeX
class CodeXSearch {
    constructor() {
        this.searchEntries = [];
        this.entryTokenFrequency = new Map();
        this.currentQuery = '';
        this.searchResults = [];
        this.suggestionContainer = null;
        this.sectionRouteMap = {
            'blood-vision': 'blood-vision.html',
            'm1-sensor': 'm1-sensor.html',
            'ring-air': 'ring-air.html',
            'powerplug': 'powerplug.html',
            'ultrahumanx': 'ultrahumanx.html',
            'ultrahuman-home': 'ultrahuman-home.html',
            'chat-email-handling': 'chat-email-handling.html',
            'misc': 'misc.html'
        };
        this.init();
    }

    init() {
        this.buildSearchIndex();
        this.bindEvents();
    }

    normalizeText(value) {
        return (value || '')
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    tokenize(value) {
        return this.normalizeText(value)
            .split(' ')
            .map(word => word.trim())
            .filter(word => word.length >= 2);
    }

    escapeHtml(value) {
        return (value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    levenshteinDistanceWithinLimit(a, b, limit = 1) {
        if (a === b) {
            return 0;
        }

        const lenA = a.length;
        const lenB = b.length;
        if (Math.abs(lenA - lenB) > limit) {
            return limit + 1;
        }

        const prev = new Array(lenB + 1);
        const next = new Array(lenB + 1);

        for (let j = 0; j <= lenB; j += 1) {
            prev[j] = j;
        }

        for (let i = 1; i <= lenA; i += 1) {
            next[0] = i;
            let minInRow = next[0];

            for (let j = 1; j <= lenB; j += 1) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                next[j] = Math.min(
                    prev[j] + 1,
                    next[j - 1] + 1,
                    prev[j - 1] + cost
                );
                if (next[j] < minInRow) {
                    minInRow = next[j];
                }
            }

            if (minInRow > limit) {
                return limit + 1;
            }

            for (let j = 0; j <= lenB; j += 1) {
                prev[j] = next[j];
            }
        }

        return prev[lenB];
    }

    getTokenIdf(token) {
        const df = this.entryTokenFrequency.get(token) || 0;
        const total = Math.max(this.searchEntries.length, 1);
        return Math.log(1 + (total / (1 + df)));
    }

    getSectionTitle(section) {
        const heading = section.querySelector('h1, h2');
        if (heading && heading.textContent.trim()) {
            return heading.textContent.trim();
        }

        const id = section.id || 'section';
        return id
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    }

    buildSearchIndex() {
        this.searchEntries = [];
        this.entryTokenFrequency = new Map();

        const sections = Array.from(document.querySelectorAll('.section[id]'))
            .filter(section => section.id !== 'overview');

        sections.forEach(section => {
            const sectionId = section.id;
            const sectionTitle = this.getSectionTitle(section);
            const sectionTitleTokens = new Set(this.tokenize(sectionTitle));
            const searchableNodes = section.querySelectorAll('h3, h4, h5, h6, p, li, td, th, figcaption');

            let currentLocation = 'Overview';

            searchableNodes.forEach(node => {
                const text = (node.textContent || '').replace(/\s+/g, ' ').trim();
                if (!text) {
                    return;
                }

                if (/^H[3-6]$/.test(node.tagName)) {
                    currentLocation = text;
                }

                const textTokens = new Set(this.tokenize(text));
                if (!textTokens.size) {
                    return;
                }

                const locationTokens = new Set(this.tokenize(currentLocation));
                const combinedTokens = new Set([
                    ...textTokens,
                    ...locationTokens,
                    ...sectionTitleTokens
                ]);

                const entry = {
                    sectionId,
                    sectionTitle,
                    sectionTitleNormalized: this.normalizeText(sectionTitle),
                    location: currentLocation,
                    text,
                    normalizedText: this.normalizeText(text),
                    normalizedLocation: this.normalizeText(currentLocation),
                    sectionTitleTokens: Array.from(sectionTitleTokens),
                    locationTokens: Array.from(locationTokens),
                    textTokens: Array.from(textTokens),
                    combinedTokens
                };

                this.searchEntries.push(entry);

                combinedTokens.forEach(token => {
                    this.entryTokenFrequency.set(token, (this.entryTokenFrequency.get(token) || 0) + 1);
                });
            });
        });
    }

    bindEvents() {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');

        if (!searchInput || !searchButton) {
            return;
        }

        searchButton.addEventListener('click', () => this.performSearch());

        searchInput.addEventListener('keypress', event => {
            if (event.key === 'Enter') {
                this.performSearch();
            }
        });

        let searchTimeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            const query = searchInput.value.trim();
            this.showSuggestions(query);

            searchTimeout = setTimeout(() => {
                if (query.length >= 2) {
                    this.performSearch();
                } else if (!query.length) {
                    this.clearSearchResults();
                    this.clearSuggestions();
                }
            }, 160);
        });

        searchInput.addEventListener('focus', () => {
            this.showSuggestions(searchInput.value);
        });

        searchInput.addEventListener('blur', () => {
            setTimeout(() => this.clearSuggestions(), 120);
        });

        document.addEventListener('click', event => {
            if (!this.suggestionContainer) {
                return;
            }
            if (event.target === searchInput || this.suggestionContainer.contains(event.target)) {
                return;
            }
            this.clearSuggestions();
        });
    }

    findDirectSection(query) {
        const normalized = this.normalizeText(query);
        if (!normalized) {
            return null;
        }

        const sections = Array.from(document.querySelectorAll('.section[id]'))
            .filter(section => section.id !== 'overview');

        for (const section of sections) {
            const sectionId = section.id;
            const sectionTitle = this.normalizeText(this.getSectionTitle(section));
            if (sectionId === normalized || sectionTitle === normalized) {
                return sectionId;
            }
        }

        return null;
    }

    getBestFieldTokenMatch(queryToken, fieldTokens, fieldName) {
        if (!fieldTokens.length) {
            return null;
        }

        if (fieldTokens.includes(queryToken)) {
            return {
                matchedToken: queryToken,
                quality: 'exact',
                field: fieldName
            };
        }

        for (const token of fieldTokens) {
            if (token.startsWith(queryToken)) {
                return {
                    matchedToken: token,
                    quality: 'prefix',
                    field: fieldName
                };
            }
        }

        if (queryToken.length < 4) {
            return null;
        }

        for (const token of fieldTokens) {
            if (token.length < 4) {
                continue;
            }
            if (Math.abs(token.length - queryToken.length) > 1) {
                continue;
            }
            if (this.levenshteinDistanceWithinLimit(queryToken, token, 1) <= 1) {
                return {
                    matchedToken: token,
                    quality: 'fuzzy',
                    field: fieldName
                };
            }
        }

        return null;
    }

    getBestTokenMatch(queryToken, entry) {
        const candidates = [
            this.getBestFieldTokenMatch(queryToken, entry.sectionTitleTokens, 'section'),
            this.getBestFieldTokenMatch(queryToken, entry.locationTokens, 'location'),
            this.getBestFieldTokenMatch(queryToken, entry.textTokens, 'text')
        ].filter(Boolean);

        if (!candidates.length) {
            return null;
        }

        const qualityWeight = { exact: 3, prefix: 2, fuzzy: 1 };
        const fieldWeight = { section: 3, location: 2, text: 1 };

        candidates.sort((a, b) => {
            const qa = qualityWeight[a.quality] * 10 + fieldWeight[a.field];
            const qb = qualityWeight[b.quality] * 10 + fieldWeight[b.field];
            return qb - qa;
        });

        return candidates[0];
    }

    getTokenMatchScore(match, token) {
        const qualityWeight = { exact: 20, prefix: 12, fuzzy: 6 };
        const fieldWeight = { section: 2.2, location: 1.7, text: 1.2 };
        const base = qualityWeight[match.quality] || 0;
        return base * (fieldWeight[match.field] || 1) * this.getTokenIdf(token);
    }

    getOrderBonus(entry, queryTokens) {
        if (queryTokens.length < 2) {
            return 0;
        }

        const findOrderedHitCount = haystack => {
            let from = 0;
            let count = 0;
            for (const token of queryTokens) {
                const idx = haystack.indexOf(token, from);
                if (idx === -1) {
                    break;
                }
                count += 1;
                from = idx + token.length;
            }
            return count;
        };

        const locationCount = findOrderedHitCount(entry.normalizedLocation);
        const textCount = findOrderedHitCount(entry.normalizedText);
        const best = Math.max(locationCount, textCount);

        if (best <= 1) {
            return 0;
        }

        const coverage = best / queryTokens.length;
        return Math.round(coverage * 30);
    }

    getMatches(query) {
        const normalizedQuery = this.normalizeText(query);
        const queryTokens = this.tokenize(query);

        if (!queryTokens.length) {
            return [];
        }

        const matches = [];

        this.searchEntries.forEach(entry => {
            const hasExactPhrase = normalizedQuery.length >= 3 && (
                entry.sectionTitleNormalized.includes(normalizedQuery) ||
                entry.normalizedText.includes(normalizedQuery) ||
                entry.normalizedLocation.includes(normalizedQuery)
            );

            const matchedTokens = [];
            let tokenScore = 0;

            queryTokens.forEach(token => {
                const match = this.getBestTokenMatch(token, entry);
                if (!match) {
                    return;
                }

                matchedTokens.push({ token, match });
                tokenScore += this.getTokenMatchScore(match, token);
            });

            if (!matchedTokens.length && !hasExactPhrase) {
                return;
            }

            let score = tokenScore;
            const coverage = matchedTokens.length / queryTokens.length;
            score += coverage * 80;

            if (hasExactPhrase) {
                if (entry.sectionTitleNormalized.includes(normalizedQuery)) {
                    score += 120;
                }
                if (entry.normalizedLocation.includes(normalizedQuery)) {
                    score += 90;
                }
                if (entry.normalizedText.includes(normalizedQuery)) {
                    score += 60;
                }
            }

            if (matchedTokens.length === queryTokens.length && queryTokens.length > 1) {
                score += 50;
            }

            score += this.getOrderBonus(entry, queryTokens);

            if (entry.sectionTitleNormalized.startsWith(normalizedQuery)) {
                score += 120;
            } else if (entry.normalizedLocation.startsWith(normalizedQuery)) {
                score += 70;
            } else if (entry.normalizedText.startsWith(normalizedQuery)) {
                score += 40;
            }

            const allFuzzy = matchedTokens.length > 0 && matchedTokens.every(item => item.match.quality === 'fuzzy');
            if (allFuzzy && !hasExactPhrase) {
                score *= 0.65;
            }

            if (matchedTokens.length === 1 && queryTokens.length >= 3 && !hasExactPhrase) {
                score *= 0.6;
            }

            score -= Math.min(entry.text.length / 280, 4);

            matches.push({
                ...entry,
                score
            });
        });

        const deduped = new Map();
        matches.forEach(match => {
            const key = `${match.sectionId}|${match.location}`;
            const existing = deduped.get(key);
            if (!existing || match.score > existing.score) {
                deduped.set(key, match);
            }
        });

        return Array.from(deduped.values())
            .sort((a, b) => b.score - a.score)
            .slice(0, 30);
    }

    showSuggestions(query) {
        this.clearSuggestions();

        const normalizedQuery = this.normalizeText(query);
        if (normalizedQuery.length < 2) {
            return;
        }

        const queryTokens = this.tokenize(query);

        const sectionSuggestions = Array.from(document.querySelectorAll('.section[id]'))
            .filter(section => section.id !== 'overview')
            .map(section => {
                const title = this.getSectionTitle(section);
                const normalizedTitle = this.normalizeText(title);
                const titleTokens = this.tokenize(title);

                let score = 0;
                if (normalizedTitle.startsWith(normalizedQuery)) {
                    score += 80;
                } else if (normalizedTitle.includes(normalizedQuery)) {
                    score += 50;
                }

                queryTokens.forEach(token => {
                    if (titleTokens.includes(token)) {
                        score += 30;
                    } else if (titleTokens.some(candidate => candidate.startsWith(token))) {
                        score += 15;
                    }
                });

                return {
                    type: 'section',
                    title,
                    meta: 'Main topic',
                    sectionId: section.id,
                    score
                };
            })
            .filter(item => item.score > 0);

        const contentSuggestions = this.getMatches(query)
            .slice(0, 18)
            .map(entry => ({
                type: 'content',
                title: entry.sectionTitle,
                meta: entry.location,
                sectionId: entry.sectionId,
                preview: entry.text,
                score: entry.score
            }));

        const suggestions = [...sectionSuggestions, ...contentSuggestions]
            .sort((a, b) => b.score - a.score)
            .filter((item, index, items) => {
                const key = `${item.sectionId}|${item.meta}`;
                return items.findIndex(candidate => `${candidate.sectionId}|${candidate.meta}` === key) === index;
            })
            .slice(0, 8);

        if (!suggestions.length) {
            return;
        }

        const container = document.createElement('div');
        container.className = 'search-suggestions';

        suggestions.forEach(suggestion => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'search-suggestion';

            const title = document.createElement('span');
            title.className = 'search-suggestion__title';
            title.textContent = suggestion.title;

            const meta = document.createElement('span');
            meta.className = 'search-suggestion__meta';
            meta.textContent = suggestion.meta;

            button.appendChild(title);
            button.appendChild(meta);

            button.addEventListener('click', () => {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.value = suggestion.type === 'section'
                        ? suggestion.title
                        : `${suggestion.title} ${suggestion.meta}`;
                }

                this.navigateToSection(suggestion.sectionId);
                this.clearSuggestions();
                this.clearSearchResults(true);
            });

            container.appendChild(button);
        });

        const widget = document.querySelector('.search-widget');
        if (!widget) {
            return;
        }

        widget.appendChild(container);
        this.suggestionContainer = container;
    }

    clearSuggestions() {
        if (this.suggestionContainer && this.suggestionContainer.parentNode) {
            this.suggestionContainer.parentNode.removeChild(this.suggestionContainer);
        }
        this.suggestionContainer = null;
    }

    performSearch() {
        const input = document.getElementById('searchInput');
        if (!input) {
            return;
        }

        const query = input.value.trim();
        this.currentQuery = query;

        if (!query) {
            this.clearSearchResults();
            this.clearSuggestions();
            return;
        }

        const directSection = this.findDirectSection(query);
        if (directSection) {
            this.navigateToSection(directSection);
            this.clearSearchResults(true);
            this.clearSuggestions();
            return;
        }

        this.searchResults = this.getMatches(query);
        this.displaySearchResults();
    }

    highlightMatches(text, query) {
        const safeText = this.escapeHtml(text);
        const tokens = this.tokenize(query).sort((a, b) => b.length - a.length);

        if (!tokens.length) {
            return safeText;
        }

        let highlighted = safeText;
        tokens.forEach(token => {
            const escapedToken = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${escapedToken}\\w*)`, 'ig');
            highlighted = highlighted.replace(regex, '<span class="search-result-highlight">$1</span>');
        });

        return highlighted;
    }

    getSnippet(text, query) {
        const normalizedText = this.normalizeText(text);
        const tokens = this.tokenize(query);

        let firstIndex = -1;
        tokens.forEach(token => {
            const idx = normalizedText.indexOf(token);
            if (idx !== -1 && (firstIndex === -1 || idx < firstIndex)) {
                firstIndex = idx;
            }
        });

        if (firstIndex === -1) {
            return text.length > 220 ? `${text.slice(0, 220).trim()}...` : text;
        }

        const start = Math.max(0, firstIndex - 70);
        const end = Math.min(text.length, start + 240);
        const prefix = start > 0 ? '... ' : '';
        const suffix = end < text.length ? ' ...' : '';
        return `${prefix}${text.slice(start, end).trim()}${suffix}`;
    }

    displaySearchResults() {
        const overviewSection = document.getElementById('overview');
        if (overviewSection) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            overviewSection.classList.add('active');
        }

        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }

        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';

        const title = document.createElement('h3');
        title.textContent = `Search results for "${this.currentQuery}"`;
        resultsContainer.appendChild(title);

        if (!this.searchResults.length) {
            const empty = document.createElement('div');
            empty.className = 'search-result-item';
            empty.innerHTML = `
                <div class="search-result-title">No specific matches found</div>
                <div class="search-result-snippet">Try exact product names, tags, or issue keywords.</div>
            `;
            resultsContainer.appendChild(empty);
            this.mountResults(resultsContainer);
            return;
        }

        this.searchResults.forEach(result => {
            const item = document.createElement('div');
            item.className = 'search-result-item';

            const resultTitle = document.createElement('div');
            resultTitle.className = 'search-result-title';
            resultTitle.textContent = result.sectionTitle;
            resultTitle.addEventListener('click', () => this.navigateToSection(result.sectionId));

            const resultMeta = document.createElement('span');
            resultMeta.className = 'search-result-meta';
            resultMeta.textContent = `Location: ${result.location}`;

            const snippet = document.createElement('div');
            snippet.className = 'search-result-snippet';
            snippet.innerHTML = this.highlightMatches(this.getSnippet(result.text, this.currentQuery), this.currentQuery);

            item.appendChild(resultTitle);
            item.appendChild(resultMeta);
            item.appendChild(snippet);
            resultsContainer.appendChild(item);
        });

        this.mountResults(resultsContainer);
    }

    mountResults(resultsContainer) {
        const overviewGrid = document.querySelector('.overview-grid');
        if (!overviewGrid || !overviewGrid.parentNode) {
            return;
        }

        overviewGrid.parentNode.insertBefore(resultsContainer, overviewGrid.nextSibling);
    }

    clearSearchResults(keepSectionActive = false) {
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }

        if (!keepSectionActive) {
            const overview = document.getElementById('overview');
            if (overview) {
                document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
                overview.classList.add('active');
            }
        }
    }

    navigateToSection(sectionId) {
        const route = this.sectionRouteMap[sectionId];
        if (route) {
            window.location.href = route;
            return;
        }

        const targetSection = document.getElementById(sectionId);
        if (!targetSection) {
            return;
        }

        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        targetSection.classList.add('active');

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (navLink) {
            navLink.classList.add('active');
        }

        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function initializeSearch() {
    new CodeXSearch();
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof contentData !== 'undefined') {
        initializeSearch();
    } else {
        const checkContent = setInterval(() => {
            if (typeof contentData !== 'undefined') {
                clearInterval(checkContent);
                initializeSearch();
            }
        }, 100);
    }
});
