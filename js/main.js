// Main JavaScript for CodeX
document.addEventListener('DOMContentLoaded', function() {
    overridePowerplugContent();
    initializeNavigation();
    initializeMobileMenu();
    initializeSearchToggle();
    initializeScrollEffects();
    initializeHeroButtons();
    initializeThemeToggle();

    if (typeof window.initializeContent === 'function') {
        window.initializeContent();
    }

    initializeTabs();
    initializeBloodVisionSubtabs();
    initializeRegionTabs();
    initializeTroubleshootingBlocks();
    initializeCircadianModule();
});

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const homeLinks = document.querySelectorAll('.home-pill, .back-pill');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href') || '';
            if (!href.startsWith('#')) {
                return;
            }
            e.preventDefault();

            const targetId = href.substring(1);

            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Update active nav link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Scroll to section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Close mobile menu if open
            const navList = document.getElementById('navList');
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    homeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href') || '';
            if (!href.startsWith('#')) {
                return;
            }
            e.preventDefault();
            navigateToSection(href.substring(1) || 'overview');
        });
    });
}

function initializeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');

    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
            }
        });
    }
}

function initializeSearchToggle() {
    const searchToggle = document.getElementById('searchToggle');
    const searchInput = document.getElementById('searchInput');

    if (searchToggle && searchInput) {
        searchToggle.addEventListener('click', function() {
            searchInput.focus();
        });
    }
}

function initializeScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow to header on scroll
        if (scrollTop > 0) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Navigation function for overview cards
function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (navLink) {
            navLink.classList.add('active');
        }

        // Scroll to section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu if open
        const navList = document.getElementById('navList');
        if (navList && navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }

    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.blur();

            // Clear search results
            const existingResults = document.querySelector('.search-results');
            if (existingResults) {
                existingResults.remove();
            }

            // Show overview
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            const overviewSection = document.getElementById('overview');
            if (overviewSection) {
                overviewSection.classList.add('active');
            }
        }
    }
});



// Performance monitoring
if ('performance' in window && 'timing' in performance) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`CodeX loaded in ${loadTime}ms`);
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('CodeX Error:', e.error);
    // Could send error reports to monitoring service here
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('CodeX Unhandled Promise Rejection:', e.reason);
    // Could send error reports to monitoring service here
});

function initializeTabs() {
    const tabGroups = document.querySelectorAll('.tab-buttons');
    if (!tabGroups.length) return;

    tabGroups.forEach(group => {
        const container = group.closest('.document-content') || group.parentElement;
        if (!container) return;

        const tabButtons = Array.from(group.querySelectorAll('.tab-button'));
        const tabIds = tabButtons.map(btn => btn.getAttribute('data-tab')).filter(Boolean);
        const tabContents = tabIds
            .map(id => container.querySelector(`#${id}-tab`))
            .filter(Boolean);

        if (!tabButtons.length || !tabContents.length) return;

        tabContents.forEach(content => {
            if (content.classList.contains('active')) {
                content.removeAttribute('hidden');
            } else {
                content.setAttribute('hidden', 'hidden');
            }
        });

        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                if (!tabId) return;

                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    content.setAttribute('hidden', 'hidden');
                });

                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');
                const targetContent = container.querySelector(`#${tabId}-tab`);
                if (targetContent) {
                    targetContent.classList.add('active');
                    targetContent.removeAttribute('hidden');
                }

                const tabBar = this.closest('.tab-buttons');
                if (tabBar) {
                    const offset = tabBar.getBoundingClientRect().top + window.pageYOffset - 60;
                    window.scrollTo({ top: offset, behavior: 'instant' });
                }
            });
        });
    });
}

function initializeBloodVisionSubtabs() {
    const container = document.getElementById('blood-vision-content');
    if (!container) return;

    const buttons = container.querySelectorAll('.bv-subtab');
    const panes = container.querySelectorAll('.bv-pane');
    const groupedTargets = {};
    const backButtons = container.querySelectorAll('[data-region-back]');

    if (!buttons.length || !panes.length) return;

    const reset = () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        panes.forEach(pane => {
            pane.classList.remove('active');
            pane.setAttribute('hidden', 'hidden');
        });
    };

    const setRegionMode = (isRegion) => {
        container.classList.toggle('bv-region-mode', isRegion);
    };

    const activateTarget = (target) => {
        const targetIds = groupedTargets[target] || [target];
        const hasPane = targetIds.some(id => container.querySelector(`#${id}`));
        if (!hasPane) return;
        reset();
        buttons.forEach(btn => {
            const isActive = btn.getAttribute('data-target') === target;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', String(isActive));
        });
        panes.forEach(pane => {
            const shouldShow = targetIds.includes(pane.id);
            pane.classList.toggle('active', shouldShow);
            if (shouldShow) {
                pane.removeAttribute('hidden');
            } else {
                pane.setAttribute('hidden', 'hidden');
            }
        });
        setRegionMode(target === 'bv-region');
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            activateTarget(target);
        });
    });

    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            activateTarget('bv-overview');
        });
    });

    const initial = container.querySelector('.bv-subtab.active');
    if (initial) {
        const target = initial.getAttribute('data-target');
        setRegionMode(target === 'bv-region');
    }
}

function initializeRegionTabs() {
    const tabGroups = document.querySelectorAll('.bv-region-tabs');

    tabGroups.forEach(group => {
        const buttons = group.querySelectorAll('[data-region-target]');
        const panes = group.closest('.bv-pane')?.querySelectorAll('.bv-region-pane') || [];

        const activate = (targetId) => {
            buttons.forEach(btn => {
                const isActive = btn.getAttribute('data-region-target') === targetId;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', String(isActive));
            });

            panes.forEach(pane => {
                const shouldShow = pane.id === targetId;
                pane.classList.toggle('active', shouldShow);
                if (shouldShow) {
                    pane.removeAttribute('hidden');
                } else {
                    pane.setAttribute('hidden', 'hidden');
                }
            });
        };

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-region-target');
                if (targetId) {
                    activate(targetId);
                }
            });
        });

        const defaultButton = group.querySelector('.bv-pill-button.active') || buttons[0];
        if (defaultButton) {
            const targetId = defaultButton.getAttribute('data-region-target');
            if (targetId) {
                activate(targetId);
            }
        }
    });
}

function initializeTroubleshootingBlocks() {
    const blockGroups = document.querySelectorAll('.ts-blocks');
    if (!blockGroups.length) return;

    blockGroups.forEach(group => {
        const container = group.closest('.tab-content') || group.parentElement;
        if (!container) return;

        const blocks = Array.from(group.querySelectorAll('.ts-block'));
        const panels = Array.from(container.querySelectorAll('.ts-panel'));
        if (!blocks.length || !panels.length) return;

        const activate = (targetId) => {
            blocks.forEach(block => {
                const isActive = block.getAttribute('data-ts-target') === targetId;
                block.classList.toggle('active', isActive);
            });

            panels.forEach(panel => {
                const shouldShow = panel.id === targetId;
                panel.classList.toggle('active', shouldShow);
                if (shouldShow) {
                    panel.removeAttribute('hidden');
                } else {
                    panel.setAttribute('hidden', 'hidden');
                }
            });
        };

        blocks.forEach(block => {
            block.addEventListener('click', () => {
                const targetId = block.getAttribute('data-ts-target');
                if (targetId) {
                    activate(targetId);
                }
            });
        });

        const initial = group.querySelector('.ts-block.active');
        if (initial) {
            const targetId = initial.getAttribute('data-ts-target');
            if (targetId) {
                activate(targetId);
            }
        }
    });
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const label = themeToggle.querySelector('.theme-toggle__label');
    const icon = themeToggle.querySelector('.theme-toggle__icon');

    const storedPreference = localStorage.getItem('cx-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldEnableDark = storedPreference ? storedPreference === 'dark' : prefersDark;

    const applyState = (isDark) => {
        themeToggle.setAttribute('aria-pressed', String(isDark));
        if (label) {
            label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        }
        if (icon) {
            icon.textContent = isDark ? '☀️' : '🌙';
        }
    };

    if (shouldEnableDark) {
        document.body.classList.add('dark-mode');
        applyState(true);
    } else {
        document.body.classList.remove('dark-mode');
        applyState(false);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('cx-theme', isDark ? 'dark' : 'light');
        applyState(isDark);
    });
}

// Blood Vision sub-tabs (Overview / Troubleshooting)
document.addEventListener('DOMContentLoaded', () => {
    const pillButtons = document.querySelectorAll('.bv-pill-button');
    pillButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.bv-pill-tabs');
            if (parent) {
                parent.querySelectorAll('.bv-pill-button').forEach(b => b.classList.remove('active'));
            }
            btn.classList.add('active');

            const targetId = btn.getAttribute('data-target');
            const targetEl = targetId ? document.getElementById(targetId) : null;
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

function initializeHeroButtons() {
    const heroButtons = document.querySelectorAll('.hero-button[data-target]');

    heroButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                target.classList.add('hero-target-active');
                setTimeout(() => target.classList.remove('hero-target-active'), 1200);
            }
        });
    });
}

function overridePowerplugContent() {
    if (!window.contentData || !window.contentData['powerplug']) return;

    window.contentData['powerplug'].content = `
            <h3>What are PowerPlugs?</h3>
            <p>PowerPlugs are Ultrahuman’s next-generation platform of modular health features built on top of your Ring AIR data. They let you personalize your Ultrahuman experience by unlocking specific insights, capabilities, and tools that match your health goals.</p>
            <p>Think of them as <em>intelligent extensions</em> of your Ring AIR – optional PowerUps designed to go deeper into areas like sleep, recovery, women’s health, heart health, or daily rhythm.</p>
            <p>Each PowerPlug analyzes your existing physiological signals through advanced algorithms and presents science-backed insights without altering your core Ultrahuman experience. Whether it’s understanding your Vitamin D rhythm, tracking your ovulation phase, or detecting early signs of atrial fibrillation (AFib), PowerPlugs give you the freedom to choose what matters most to you.</p>

            <h3>How do I activate PowerPlugs?</h3>
            <ol>
                <li>Open the Ultrahuman app and go to your Ring AIR homepage.</li>
                <li>Tap <strong>"Activate more PowerPlugs."</strong></li>
                <li>Browse through the available options.</li>
                <li>Select the PowerPlug you’d like to add and tap <strong>"Get."</strong></li>
            </ol>
            <p>If it’s a premium PowerPlug, you’ll be redirected to your app store to complete your purchase. Once installed, it will appear in your active PowerPlugs list and start working seamlessly with your existing data.</p>

            <h3>Why are some PowerPlugs paid?</h3>
            <p>Some PowerPlugs require deeper computational models, medical-grade validation, or licensed algorithms that go beyond standard wellness analytics. These involve clinical testing, regulatory compliance, and data infrastructure that ensure medical accuracy and reliability.</p>
            <p>By offering both <strong>free and premium</strong> PowerPlugs, Ultrahuman ensures everyone has access to essential wellness insights while providing more specialized, research-backed tools for those who want advanced health analysis. Premium PowerPlugs are optional add-ons — they enhance your experience but never restrict access to Ultrahuman’s core features like sleep, recovery, stress, and activity tracking.</p>

            <h3>What are the PowerPlugs available today?</h3>
            <h4>Free PowerPlugs</h4>
            <ul>
                <li><strong>Vitamin D PowerPlug</strong> – Understand how sunlight exposure impacts your circadian rhythm and vitamin D synthesis.</li>
                <li><strong>Caffeine Window</strong> – Identify when caffeine helps versus when it disrupts your recovery and sleep.</li>
                <li><strong>Circadian Alignment</strong> – Optimize activity and rest times based on your biological rhythm.</li>
                <li><strong>Cycle Tracking</strong> – Predict and understand your cycle phases using multi-biomarker analysis (temperature, HRV, RHR).</li>
                <li><strong>Pregnancy Insights</strong> – Track key changes and trends through different stages of pregnancy.</li>
            </ul>

            <h4>Premium PowerPlugs</h4>
            <ul>
                <li><strong>Cycle &amp; Ovulation Pro</strong> – Built using clinically validated OvuSense technology and 15 years of research; delivers over 90% accuracy for ovulation confirmation and supports diverse cycle types including PCOS and endometriosis.</li>
                <li><strong>AFib Detection</strong> – Smart ring feature capable of detecting atrial fibrillation using medical-grade PPG sensing and validated algorithms.</li>
                <li><strong>Cardio Adaptability</strong> – Advanced cardiovascular insights measuring how effectively your heart adapts to stress and recovery patterns.</li>
            </ul>

            <h3>Where is AFib Detection available?</h3>
            <p>AFib Detection is currently available in <strong>Europe, the UK, Turkey, and Switzerland</strong>, with expansion plans for the <strong>USA, UAE, and India</strong> underway. Regional availability depends on regulatory clearance in each geography to ensure medically validated and compliant reports.</p>

            <h3>Can I change my PowerPlug subscription plan?</h3>
            <ol>
                <li>Go to the <strong>PowerPlugs</strong> section in the app.</li>
                <li>Tap the <strong>settings icon</strong> next to any active PowerPlug.</li>
                <li>Switch between <strong>monthly</strong> and <strong>annual</strong> plans, restore purchases, or update payment options.</li>
            </ol>
            <p>Your data and insights remain securely stored and continue seamlessly when you modify or renew a subscription.</p>
        `;

    if (typeof window.loadContent === 'function') {
        loadContent('powerplug');
    }
}

function initializeCircadianModule() {
    const module = document.getElementById('circadian-module');
    if (!module) return;

    const openers = document.querySelectorAll('[data-open-circadian]');
    const closers = module.querySelectorAll('[data-close-circadian]');
    const tabs = module.querySelectorAll('.circadian-tab');
    const panels = module.querySelectorAll('.circadian-panel');

    const activateTab = (tabId) => {
        tabs.forEach(tab => {
            const isActive = tab.getAttribute('data-tab') === tabId;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', String(isActive));
        });

        panels.forEach(panel => {
            const isMatch = panel.id === `${tabId}-panel`;
            panel.classList.toggle('active', isMatch);
            if (isMatch) {
                panel.removeAttribute('hidden');
            } else {
                panel.setAttribute('hidden', 'hidden');
            }
        });
    };

    const showModule = () => {
        module.classList.add('active');
        module.removeAttribute('hidden');
        module.setAttribute('aria-hidden', 'false');
        activateTab('circadian-overview');
        module.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const hideModule = () => {
        module.classList.remove('active');
        module.setAttribute('hidden', 'hidden');
        module.setAttribute('aria-hidden', 'true');

        // Return focus and view back to the PowerPlug list
        const anchor = document.querySelector('[data-open-circadian]');
        if (anchor) {
            anchor.focus({ preventScroll: true });
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    openers.forEach(btn => {
        btn.addEventListener('click', showModule);
    });

    closers.forEach(btn => {
        btn.addEventListener('click', hideModule);
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            if (tabId) {
                activateTab(tabId);
            }
        });
    });
}
