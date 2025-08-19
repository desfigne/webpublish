// 포트폴리오 대시보드 JavaScript

class PortfolioDashboard {
    constructor() {
        this.currentTheme = 'light';
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.animateSkillBars();
        this.setupNavigation();
        this.setupIntersectionObserver();
        this.setupCardInteractions();
        this.initializeAnimations();
    }

    // 테마 토글 기능
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('.theme-toggle__icon');
        
        // 초기 테마 설정
        this.setTheme('light');
        
        themeToggle.addEventListener('click', () => {
            this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(this.currentTheme);
            
            // 버튼 애니메이션
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-color-scheme', theme);
        const themeIcon = document.querySelector('.theme-toggle__icon');
        
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
            themeIcon.setAttribute('aria-label', '라이트 모드로 전환');
        } else {
            themeIcon.textContent = '🌙';
            themeIcon.setAttribute('aria-label', '다크 모드로 전환');
        }
        
        this.currentTheme = theme;
    }

    // 스킬 바 애니메이션
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateBar = (bar) => {
            const skillLevel = bar.getAttribute('data-skill');
            const targetWidth = `${skillLevel}%`;
            
            // 애니메이션 지연 추가
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 300);
        };

        // Intersection Observer로 스킬 섹션이 보일 때 애니메이션 실행
        const skillsCard = document.querySelector('.skills-card');
        if (skillsCard) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        skillBars.forEach((bar, index) => {
                            setTimeout(() => {
                                animateBar(bar);
                            }, index * 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(skillsCard);
        }
    }

    // 네비게이션 설정
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // 활성 상태 업데이트
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
                
                // 해당 링크와 같은 href를 가진 모든 링크 활성화
                const href = link.getAttribute('href');
                document.querySelectorAll(`[href="${href}"]`).forEach(matchingLink => {
                    matchingLink.classList.add('active');
                });
                
                // 부드러운 스크롤 효과 (섹션이 있다면)
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // 클릭 피드백
                this.addClickFeedback(link);
            });
        });
    }

    // 클릭 피드백 효과
    addClickFeedback(element) {
        element.style.transform = 'scale(0.98)';
        setTimeout(() => {
            element.style.transform = '';
        }, 150);
    }

    // Intersection Observer 설정
    setupIntersectionObserver() {
        const cards = document.querySelectorAll('.card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    // 카드 상호작용 설정
    setupCardInteractions() {
        // 프로젝트 카드 클릭 효과
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                this.showProjectDetails(card);
            });
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateX(4px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateX(4px)';
            });
        });

        // 통계 카드 호버 효과
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px) scale(1.05)';
                card.style.boxShadow = 'var(--shadow-lg)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(-2px)';
                card.style.boxShadow = '';
            });
        });

        // 연락처 항목 클릭 효과
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            item.addEventListener('click', () => {
                this.addClickFeedback(item);
            });
        });
    }

    // 프로젝트 상세 정보 표시 (모달 대신 간단한 알림)
    showProjectDetails(card) {
        const title = card.querySelector('.project-title').textContent;
        const description = card.querySelector('.project-description').textContent;
        
        // 간단한 알림 표시
        this.showNotification(`${title}: ${description}`, 'info');
        
        // 카드 강조 효과
        card.style.borderLeftColor = 'var(--color-primary)';
        card.style.background = 'var(--color-bg-1)';
        
        setTimeout(() => {
            card.style.borderLeftColor = '';
            card.style.background = '';
        }, 2000);
    }

    // 알림 표시 함수
    showNotification(message, type = 'info') {
        // 기존 알림 제거
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // 새 알림 생성
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close" aria-label="알림 닫기">×</button>
            </div>
        `;

        // 스타일 추가
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            padding: var(--space-16);
            box-shadow: var(--shadow-lg);
            z-index: 1100;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // 애니메이션으로 표시
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // 닫기 버튼 이벤트
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.addEventListener('click', () => {
            this.hideNotification(notification);
        });

        // 3초 후 자동 제거
        setTimeout(() => {
            if (notification.parentNode) {
                this.hideNotification(notification);
            }
        }, 3000);
    }

    hideNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }

    // 초기 애니메이션 설정
    initializeAnimations() {
        // 페이지 로드 시 순차적 애니메이션
        const animateElements = document.querySelectorAll('.profile-card, .stat-card, .project-card, .skills-card, .contact-card');
        
        animateElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });

        // 타이핑 효과 (프로필 이름)
        this.typewriterEffect();
    }

    // 타이핑 효과
    typewriterEffect() {
        const nameElement = document.querySelector('.profile-name--large');
        if (!nameElement) return;

        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            nameElement.textContent += originalText.charAt(i);
            i++;
            
            if (i === originalText.length) {
                clearInterval(typeInterval);
            }
        }, 100);
    }

    // 유틸리티 함수: 부드러운 스크롤
    smoothScrollTo(element) {
        const targetPosition = element.offsetTop - 100;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // 반응형 처리
    handleResize() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth <= 1024) {
            sidebar.style.position = 'static';
            mainContent.style.marginTop = '0';
        } else {
            sidebar.style.position = 'fixed';
            mainContent.style.marginTop = '80px';
        }
    }
}

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new PortfolioDashboard();
    
    // 윈도우 리사이즈 이벤트
    window.addEventListener('resize', () => {
        dashboard.handleResize();
    });
    
    // 초기 리사이즈 처리
    dashboard.handleResize();
    
    // 키보드 네비게이션 지원
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // ESC로 알림 닫기
        if (e.key === 'Escape') {
            const notification = document.querySelector('.notification');
            if (notification) {
                dashboard.hideNotification(notification);
            }
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
});

// 성능 최적화: 스크롤 이벤트 쓰로틀링
function throttle(func, wait) {
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

// 스크롤 기반 효과 (성능 최적화됨)
const handleScroll = throttle(() => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (scrolled > 50) {
        header.style.backgroundColor = 'rgba(var(--color-surface-rgb, 255, 255, 253), 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--color-surface)';
        header.style.backdropFilter = 'none';
    }
}, 100);

window.addEventListener('scroll', handleScroll);

// 접근성: 포커스 관리
document.addEventListener('focusin', (e) => {
    const focusedElement = e.target;
    
    // 카드 요소에 포커스 시 강조
    if (focusedElement.classList.contains('card') || focusedElement.closest('.card')) {
        const card = focusedElement.classList.contains('card') ? focusedElement : focusedElement.closest('.card');
        card.style.outline = '2px solid var(--color-primary)';
        card.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', (e) => {
    const blurredElement = e.target;
    
    if (blurredElement.classList.contains('card') || blurredElement.closest('.card')) {
        const card = blurredElement.classList.contains('card') ? blurredElement : blurredElement.closest('.card');
        card.style.outline = '';
        card.style.outlineOffset = '';
    }
});

// 에러 처리
window.addEventListener('error', (e) => {
    console.error('애플리케이션 오류:', e.error);
});

// 개발자를 위한 유틸리티 함수들
window.portfolioUtils = {
    toggleTheme: () => {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-color-scheme', newTheme);
    },
    
    animateSkills: () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            bar.style.width = '0';
            setTimeout(() => {
                const skillLevel = bar.getAttribute('data-skill');
                bar.style.width = `${skillLevel}%`;
            }, 100);
        });
    },
    
    showStats: () => {
        console.log('포트폴리오 통계:', {
            프로젝트: '25+',
            경험: '3+ 년',
            기술스택: '12',
            만족도: '98%'
        });
    }
};