// Apple Style Portfolio JavaScript

class ApplePortfolio {
    constructor() {
        this.isPortfolioActive = false;
        this.currentTheme = this.getPreferredTheme();
        this.observers = new Map();
        this.animationQueue = [];
        this.isScrolling = false;
        
        this.init();
    }

    init() {
        this.initTheme();
        this.setupEventListeners();
        this.setupIntersectionObservers();
        this.setupSmoothScrolling();
        this.initAnimations();
        this.handleInitialLoad();
    }

    initTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeToggle();
    }

    getPreferredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    updateThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    setupEventListeners() {
        // Navigation buttons
        const portfolioBtn = document.getElementById('portfolioBtn');
        const viewPortfolioBtn = document.getElementById('viewPortfolioBtn');
        const backBtn = document.getElementById('backBtn');
        const themeToggle = document.getElementById('themeToggle');

        if (portfolioBtn) {
            portfolioBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showPortfolio();
            });
        }

        if (viewPortfolioBtn) {
            viewPortfolioBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showPortfolio();
            });
        }

        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.hidePortfolio();
            });
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Smooth navigation links
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection && !this.isPortfolioActive) {
                    this.smoothScrollTo(targetSection);
                }
            });
        });

        // Skill card hover effects
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.animateSkillCard(card, true);
            });
            
            card.addEventListener('mouseleave', () => {
                this.animateSkillCard(card, false);
            });
        });

        // Portfolio sidebar navigation
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveNavItem(item);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardNavigation(e);
        });

        // Scroll events
        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, 16), { passive: true });

        // Resize events
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250), { passive: true });

        // Theme system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.currentTheme = e.matches ? 'dark' : 'light';
                this.initTheme();
            }
        });
    }

    setupIntersectionObservers() {
        // Section animation observer
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSection(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        });

        // Observe all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // Stats counter observer
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.experience__stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        this.observers.set('sections', sectionObserver);
        this.observers.set('stats', statsObserver);
    }

    setupSmoothScrolling() {
        // Enhance native smooth scrolling
        if (CSS.supports('scroll-behavior', 'smooth')) {
            document.documentElement.style.scrollBehavior = 'smooth';
        }
    }

    initAnimations() {
        // Initialize skill progress bars for portfolio section
        requestAnimationFrame(() => {
            this.initSkillBars();
        });

        // Add entrance animations to elements
        this.setupEntranceAnimations();
    }

    setupEntranceAnimations() {
        const animatedElements = document.querySelectorAll(
            '.skill-card, .project-card, .highlight, .stat'
        );
        
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s cubic-bezier(0.28, 0, 0.63, 1), transform 0.6s cubic-bezier(0.28, 0, 0.63, 1)';
            element.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    animateSection(section) {
        const elements = section.querySelectorAll(
            '.skill-card, .project-card, .highlight, .stat'
        );
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat__number');
        
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));
            const suffix = finalValue.replace(/[\d]/g, '');
            
            if (numericValue > 0) {
                this.countUp(stat, 0, numericValue, 2000, suffix);
            }
        });
    }

    countUp(element, start, end, duration, suffix = '') {
        const startTime = performance.now();
        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easedProgress = this.easeOutExpo(progress);
            const currentValue = Math.floor(start + (end - start) * easedProgress);
            
            element.textContent = currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = end + suffix;
            }
        };
        
        requestAnimationFrame(updateCount);
    }

    animateSkillCard(card, isHovering) {
        const icon = card.querySelector('.skill-card__icon');
        
        if (isHovering) {
            icon.style.transform = 'scale(1.1) rotateY(180deg)';
            card.style.boxShadow = '0 25px 50px rgba(0, 122, 255, 0.15)';
        } else {
            icon.style.transform = 'scale(1) rotateY(0deg)';
            card.style.boxShadow = '';
        }
    }

    showPortfolio() {
        const portfolioSection = document.getElementById('portfolioSection');
        const mainSections = document.querySelectorAll('section:not(.portfolio-section)');
        
        if (!portfolioSection) return;
        
        // Fade out main sections
        mainSections.forEach(section => {
            section.style.transition = 'opacity 0.3s cubic-bezier(0.28, 0, 0.63, 1), transform 0.3s cubic-bezier(0.28, 0, 0.63, 1)';
            section.style.opacity = '0';
            section.style.transform = 'translateY(-20px)';
        });
        
        setTimeout(() => {
            // Hide main sections and show portfolio
            mainSections.forEach(section => {
                section.style.display = 'none';
            });
            
            portfolioSection.classList.add('active');
            portfolioSection.style.opacity = '0';
            portfolioSection.style.transform = 'translateY(20px)';
            
            // Animate portfolio entrance
            requestAnimationFrame(() => {
                portfolioSection.style.transition = 'opacity 0.4s cubic-bezier(0.28, 0, 0.63, 1), transform 0.4s cubic-bezier(0.28, 0, 0.63, 1)';
                portfolioSection.style.opacity = '1';
                portfolioSection.style.transform = 'translateY(0)';
                
                // Animate dashboard elements
                setTimeout(() => {
                    this.animateDashboardEntrance();
                    this.animateSkillBars();
                }, 200);
            });
        }, 300);
        
        this.isPortfolioActive = true;
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 400);
    }

    hidePortfolio() {
        const portfolioSection = document.getElementById('portfolioSection');
        const mainSections = document.querySelectorAll('section:not(.portfolio-section)');
        
        if (!portfolioSection) return;
        
        // Fade out portfolio
        portfolioSection.style.transition = 'opacity 0.3s cubic-bezier(0.28, 0, 0.63, 1), transform 0.3s cubic-bezier(0.28, 0, 0.63, 1)';
        portfolioSection.style.opacity = '0';
        portfolioSection.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            // Hide portfolio and show main sections
            portfolioSection.classList.remove('active');
            
            mainSections.forEach(section => {
                section.style.display = '';
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
            });
            
            // Animate main sections entrance
            requestAnimationFrame(() => {
                mainSections.forEach((section, index) => {
                    setTimeout(() => {
                        section.style.transition = 'opacity 0.4s cubic-bezier(0.28, 0, 0.63, 1), transform 0.4s cubic-bezier(0.28, 0, 0.63, 1)';
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, index * 50);
                });
            });
        }, 300);
        
        this.isPortfolioActive = false;
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    animateDashboardEntrance() {
        const dashboardCards = document.querySelectorAll('.dashboard-card');
        
        dashboardCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.95)';
            card.style.transition = 'opacity 0.4s cubic-bezier(0.28, 0, 0.63, 1), transform 0.4s cubic-bezier(0.28, 0, 0.63, 1)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        });
    }

    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill__progress');
        skillBars.forEach(bar => {
            bar.style.width = '0%';
        });
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill__progress');
        
        skillBars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-width');
            
            setTimeout(() => {
                bar.style.width = `${targetWidth}%`;
            }, index * 200);
        });
    }

    setActiveNavItem(activeItem) {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.classList.remove('active');
        });
        
        activeItem.classList.add('active');
        
        // Add ripple effect
        this.addRippleEffect(activeItem);
    }

    addRippleEffect(element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(0, 122, 255, 0.3)';
        ripple.style.position = 'absolute';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.currentTheme);
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeToggle();
        
        // Add smooth transition for theme change
        document.body.style.transition = 'background-color 0.3s cubic-bezier(0.28, 0, 0.63, 1), color 0.3s cubic-bezier(0.28, 0, 0.63, 1)';
        
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    smoothScrollTo(target) {
        const targetPosition = target.offsetTop - 80; // Account for fixed nav
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = Math.abs(distance) * 0.5; // Adjust speed
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }

    handleScroll() {
        if (this.isPortfolioActive) return;
        
        const scrolled = window.pageYOffset;
        const nav = document.querySelector('.nav');
        
        if (nav) {
            if (scrolled > 50) {
                nav.style.background = this.currentTheme === 'dark' 
                    ? 'rgba(0, 0, 0, 0.9)' 
                    : 'rgba(255, 255, 255, 0.9)';
                nav.style.backdropFilter = 'blur(20px)';
            } else {
                nav.style.background = this.currentTheme === 'dark' 
                    ? 'rgba(0, 0, 0, 0.8)' 
                    : 'rgba(255, 255, 255, 0.8)';
            }
        }

        // Parallax effect for hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const heroOffset = scrolled * 0.5;
            heroSection.style.transform = `translateY(${heroOffset}px)`;
        }
    }

    handleResize() {
        // Recalculate positions and animations on resize
        this.setupIntersectionObservers();
    }

    handleKeyboardNavigation(e) {
        if (e.key === 'Escape' && this.isPortfolioActive) {
            this.hidePortfolio();
        }
        
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    }

    handleInitialLoad() {
        // Add loaded class to body for CSS transitions
        document.body.classList.add('loaded');
        
        // Initialize entrance animations after a brief delay
        setTimeout(() => {
            this.animateSection(document.querySelector('.hero-section'));
        }, 500);
    }

    // Utility functions
    throttle(func, wait) {
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

    debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }

    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    // Cleanup method
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }
}

// Add CSS animations for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .keyboard-nav *:focus {
        outline: 2px solid var(--color-blue);
        outline-offset: 2px;
        border-radius: 4px;
    }
    
    body.loaded .hero-content > * {
        animation: fadeInUp 0.6s cubic-bezier(0.28, 0, 0.63, 1) both;
    }
    
    body.loaded .hero__title {
        animation-delay: 0.2s;
    }
    
    body.loaded .hero__subtitle {
        animation-delay: 0.4s;
    }
    
    body.loaded .hero__badges {
        animation-delay: 0.6s;
    }
`;

document.head.appendChild(style);

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            window.applePortfolio = new ApplePortfolio();
        });
    } else {
        setTimeout(() => {
            window.applePortfolio = new ApplePortfolio();
        }, 100);
    }
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    if (window.applePortfolio) {
        window.applePortfolio.destroy();
    }
});

// Mouse click removes keyboard navigation class
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Performance monitoring (development only)
if (window.location.hostname === 'localhost') {
    window.addEventListener('load', () => {
        if ('performance' in window && 'measure' in performance) {
            setTimeout(() => {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`Portfolio loaded in ${loadTime}ms`);
            }, 0);
        }
    });
}

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ApplePortfolio;
}