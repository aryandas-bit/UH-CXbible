// Search functionality for CodeX
class CodeXSearch {
    constructor() {
        this.searchEntries = [];
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

                this.searchEntries.push({
                    sectionId,
                    sectionTitle,
                    location: currentLocation,
                    text,
                    normalizedText: this.normalizeText(text),
                    normalizedLocation: this.normalizeText(currentLocation),
                    combinedTokens
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

    getMatches(query) {
        const normalizedQuery = this.normalizeText(query);
        const queryTokens = this.tokenize(query);

        if (!queryTokens.length) {
            return [];
        }

        const matches = [];

        this.searchEntries.forEach(entry => {
            const hasAllTokens = queryTokens.every(token => entry.combinedTokens.has(token));
            const hasExactPhrase = normalizedQuery.length >= 3 && (
                entry.normalizedText.includes(normalizedQuery) ||
                entry.normalizedLocation.includes(normalizedQuery)
            );

            if (!hasAllTokens && !hasExactPhrase) {
                return;
            }

            let score = 0;
            if (hasExactPhrase) {
                score += 8;
            }

            queryTokens.forEach(token => {
                if (entry.normalizedLocation.includes(token)) {
                    score += 3;
                }
                if (entry.normalizedText.includes(token)) {
                    score += 2;
                }
                if (this.normalizeText(entry.sectionTitle).includes(token)) {
                    score += 4;
                }
            });

            matches.push({
                ...entry,
                score
            });
        });

        return matches
            .sort((a, b) => b.score - a.score)
            .slice(0, 30);
    }

    showSuggestions(query) {
        this.clearSuggestions();

        const normalizedQuery = this.normalizeText(query);
        if (normalizedQuery.length < 2) {
            return;
        }

        const sectionSuggestions = [];

        Array.from(document.querySelectorAll('.section[id]'))
            .filter(section => section.id !== 'overview')
            .forEach(section => {
                const title = this.getSectionTitle(section);
                const normalizedTitle = this.normalizeText(title);
                if (!normalizedTitle.includes(normalizedQuery)) {
                    return;
                }

                sectionSuggestions.push({
                    type: 'section',
                    title,
                    meta: 'Main topic',
                    sectionId: section.id,
                    score: normalizedTitle.indexOf(normalizedQuery)
                });
            });

        const contentSuggestions = this.searchEntries
            .filter(entry => (
                entry.normalizedText.includes(normalizedQuery) ||
                entry.normalizedLocation.includes(normalizedQuery)
            ))
            .slice(0, 18)
            .map(entry => ({
                type: 'content',
                title: entry.sectionTitle,
                meta: entry.location,
                sectionId: entry.sectionId,
                preview: entry.text,
                score: entry.normalizedLocation.indexOf(normalizedQuery) !== -1
                    ? entry.normalizedLocation.indexOf(normalizedQuery)
                    : entry.normalizedText.indexOf(normalizedQuery)
            }));

        const suggestions = [...sectionSuggestions, ...contentSuggestions]
            .sort((a, b) => a.score - b.score)
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
        const tokens = this.tokenize(query);
        let highlighted = text;

        tokens.forEach(token => {
            const regex = new RegExp(`\\b(${token})\\b`, 'ig');
            highlighted = highlighted.replace(regex, '<span class="search-result-highlight">$1</span>');
        });

        return highlighted;
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
            snippet.innerHTML = this.highlightMatches(result.text, this.currentQuery);

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
