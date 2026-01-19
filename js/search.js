// Search functionality for CodeX
class CodeXSearch {
    constructor() {
        this.searchIndex = {};
        this.searchResults = [];
        this.currentQuery = '';
        this.suggestionPool = [];
        this.suggestionContainer = null;
        this.init();
    }

    init() {
        this.buildSearchIndex();
        this.bindEvents();
    }

    buildSearchIndex() {
        // Build search index from content data
        Object.keys(contentData).forEach(sectionId => {
            const section = contentData[sectionId];
            // Strip HTML tags and get plain text content
            const content = this.stripHtml(section.content).toLowerCase();
            const title = section.title.toLowerCase();

            // Split content into sentences for better snippet extraction
            const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);

            sentences.forEach((sentence, index) => {
                const words = sentence.toLowerCase().split(/\s+/);
                words.forEach(word => {
                    if (word.length > 2) { // Only index words longer than 2 characters
                        if (!this.searchIndex[word]) {
                            this.searchIndex[word] = [];
                        }
                        this.searchIndex[word].push({
                            sectionId: sectionId,
                            sectionTitle: section.title,
                            sentence: sentence.trim(),
                            sentenceIndex: index
                        });
                    }
                });
            });

            // Also index the title
            const titleWords = title.split(/\s+/);
            titleWords.forEach(word => {
                if (word.length > 2) {
                    if (!this.searchIndex[word]) {
                        this.searchIndex[word] = [];
                    }
                    this.searchIndex[word].push({
                        sectionId: sectionId,
                        sectionTitle: section.title,
                        sentence: title,
                        sentenceIndex: -1,
                        isTitle: true
                    });
                }
            });
        });
    }

    collectSuggestionPool() {
        const pool = new Map();

        // From contentData
        Object.entries(contentData).forEach(([id, section]) => {
            const title = section.title || id;
            pool.set(id, { id, title });
        });

        // From nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href') || '';
            if (href.startsWith('#')) {
                const id = href.substring(1);
                const title = link.textContent.trim() || id;
                pool.set(id, { id, title });
            }
        });

        this.suggestionPool = Array.from(pool.values());
    }

    stripHtml(html) {
        // Create a temporary div element to strip HTML tags
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    }

    bindEvents() {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');

        this.collectSuggestionPool();

        if (searchInput && searchButton) {
            searchButton.addEventListener('click', () => this.performSearch());
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });

            // Live search with debounce
            let searchTimeout;
            searchInput.addEventListener('input', () => {
                clearTimeout(searchTimeout);
                this.showSuggestions(searchInput.value);
                searchTimeout = setTimeout(() => {
                    if (searchInput.value.length > 2) {
                        this.performSearch();
                    } else if (searchInput.value.length === 0) {
                        this.clearSearchResults();
                        this.clearSuggestions();
                    }
                }, 300);
            });

            searchInput.addEventListener('focus', () => this.showSuggestions(searchInput.value));
            searchInput.addEventListener('blur', () => {
                setTimeout(() => this.clearSuggestions(), 120);
            });
        }

        document.addEventListener('click', (e) => {
            if (this.suggestionContainer && !this.suggestionContainer.contains(e.target) && e.target !== searchInput) {
                this.clearSuggestions();
            }
        });
    }

    showSuggestions(query) {
        this.clearSuggestions();
        const trimmed = (query || '').toLowerCase().trim();
        if (trimmed.length < 2 || this.suggestionPool.length === 0) return;

        const matches = this.suggestionPool
            .map(item => {
                const title = item.title.toLowerCase();
                const id = item.id.toLowerCase();
                const matchIndex = title.indexOf(trimmed);
                const idIndex = id.indexOf(trimmed);
                const score = matchIndex !== -1 ? matchIndex : idIndex !== -1 ? idIndex + 100 : Infinity;
                return { ...item, score };
            })
            .filter(item => item.score !== Infinity)
            .sort((a, b) => a.score - b.score)
            .slice(0, 6);

        if (matches.length === 0) return;

        const container = document.createElement('div');
        container.className = 'search-suggestions';

        matches.forEach(match => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'search-suggestion';
            btn.textContent = match.title;
            btn.addEventListener('click', () => {
                const input = document.getElementById('searchInput');
                if (input) input.value = match.title;
                this.navigateToSection(match.id);
                this.clearSuggestions();
                this.clearSearchResults(true);
            });
            container.appendChild(btn);
        });

        const widget = document.querySelector('.search-widget');
        if (widget) {
            widget.appendChild(container);
            this.suggestionContainer = container;
        }
    }

    clearSuggestions() {
        if (this.suggestionContainer && this.suggestionContainer.parentNode) {
            this.suggestionContainer.parentNode.removeChild(this.suggestionContainer);
        }
        this.suggestionContainer = null;
    }

    performSearch() {
        const query = document.getElementById('searchInput').value.trim().toLowerCase();
        if (!query) {
            this.clearSearchResults();
            this.clearSuggestions();
            return;
        }

        // Quick direct match to a known section title or id
        const directSection = this.findDirectSection(query);
        if (directSection) {
            this.navigateToSection(directSection);
            this.clearSearchResults(true);
            this.clearSuggestions();
            return;
        }

        this.currentQuery = query;
        this.searchResults = [];

        const queryWords = query.split(/\s+/).filter(word => word.length > 2);
        const resultMap = new Map();

        queryWords.forEach(word => {
            if (this.searchIndex[word]) {
                this.searchIndex[word].forEach(result => {
                    const key = `${result.sectionId}-${result.sentenceIndex}`;
                    if (!resultMap.has(key)) {
                        resultMap.set(key, {
                            ...result,
                            score: 0,
                            matchedWords: []
                        });
                    }
                    const existing = resultMap.get(key);
                    existing.score += result.isTitle ? 10 : 1; // Title matches get higher score
                    existing.matchedWords.push(word);
                });
            }
        });

        // Convert map to array and sort by score
        this.searchResults = Array.from(resultMap.values())
            .sort((a, b) => b.score - a.score)
            .slice(0, 50); // Limit to top 50 results

        if (this.searchResults.length === 0) {
            this.showNoResults();
            return;
        }

        // Redirect to the best-matching section immediately
        const topResult = this.searchResults[0];
        this.navigateToSection(topResult.sectionId);

        // Clear any prior search UI without changing the active section
        this.clearSearchResults(true);
    }

    findDirectSection(query) {
        const normalized = query.toLowerCase();

        // Try contentData titles/ids
        for (const [sectionId, section] of Object.entries(contentData)) {
            const titleMatch = section.title && section.title.toLowerCase().includes(normalized);
            const idMatch = sectionId.toLowerCase().includes(normalized);
            if (titleMatch || idMatch) return sectionId;
        }

        // Try nav link labels
        const navLinks = document.querySelectorAll('.nav-link');
        for (const link of navLinks) {
            const text = link.textContent.trim().toLowerCase();
            if (text.includes(normalized)) {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    return href.substring(1);
                }
            }
        }
        return null;
    }

    displaySearchResults() {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show overview section with search results
        const overviewSection = document.getElementById('overview');
        overviewSection.classList.add('active');

        // Remove existing search results
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }

        if (this.searchResults.length === 0) {
            this.showNoResults();
            return;
        }

        // Create search results container
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';

        const resultsTitle = document.createElement('h3');
        resultsTitle.textContent = `Search Results for "${this.currentQuery}" (${this.searchResults.length} results)`;
        resultsContainer.appendChild(resultsTitle);

        this.searchResults.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';

            const title = document.createElement('div');
            title.className = 'search-result-title';
            title.textContent = result.sectionTitle;
            title.addEventListener('click', () => this.navigateToSection(result.sectionId));

            const snippet = document.createElement('div');
            snippet.className = 'search-result-snippet';
            snippet.innerHTML = this.highlightMatches(result.sentence, result.matchedWords);

            resultItem.appendChild(title);
            resultItem.appendChild(snippet);
            resultsContainer.appendChild(resultItem);
        });

        // Insert after overview grid
        const overviewGrid = document.querySelector('.overview-grid');
        overviewGrid.parentNode.insertBefore(resultsContainer, overviewGrid.nextSibling);
    }

    highlightMatches(text, matchedWords) {
        let highlightedText = text;
        matchedWords.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="search-result-highlight">$1</span>');
        });
        return highlightedText;
    }

    navigateToSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');

            // Update navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const navLink = document.querySelector(`[href="#${sectionId}"]`);
            if (navLink) {
                navLink.classList.add('active');
            }

            // Scroll to top of section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    showNoResults() {
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';

        const noResults = document.createElement('div');
        noResults.className = 'search-result-item';
        noResults.innerHTML = `
            <div class="search-result-title">No results found</div>
            <div class="search-result-snippet">Try different keywords or check your spelling.</div>
        `;

        resultsContainer.appendChild(noResults);

        const overviewGrid = document.querySelector('.overview-grid');
        overviewGrid.parentNode.insertBefore(resultsContainer, overviewGrid.nextSibling);
    }

    clearSearchResults(keepSectionActive = false) {
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }

        if (!keepSectionActive) {
            // Show overview section
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById('overview').classList.add('active');
        }
    }
}

// Initialize search after content is loaded
function initializeSearch() {
    new CodeXSearch();
}

// Wait for content to be loaded before initializing search
document.addEventListener('DOMContentLoaded', function() {
    // Check if content is already loaded
    if (typeof contentData !== 'undefined') {
        initializeSearch();
    } else {
        // Wait for content to load
        const checkContent = setInterval(() => {
            if (typeof contentData !== 'undefined') {
                clearInterval(checkContent);
                initializeSearch();
            }
        }, 100);
    }
});
