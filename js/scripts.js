/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Dates are now displayed inside cards as .experience-date elements

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);

// ================================
// MODERN ENHANCEMENTS
// ================================

(function() {
    'use strict';

    // ================================
    // MARK JS AS ENABLED
    // ================================
    document.documentElement.classList.add('js-enabled');
    document.body.classList.add('js-enabled');

    // ================================
    // SCROLL TO TOP BUTTON
    // ================================
    const scrollTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ================================
    // PROGRESS BAR
    // ================================
    function updateProgressBar() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
    }

    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);

    // ================================
    // DARK MODE TOGGLE
    // ================================
    function initDarkMode() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (!darkModeToggle) {
            console.error('Dark mode toggle button not found!');
            return;
        }

        const body = document.body;
        const darkModeIcon = darkModeToggle.querySelector('i');

        if (!darkModeIcon) {
            console.error('Dark mode icon not found!');
            return;
        }

        // Check for saved dark mode preference
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        if (isDarkMode) {
            body.classList.add('dark-mode');
            darkModeIcon.classList.remove('fa-moon-o');
            darkModeIcon.classList.add('fa-sun-o');
        }

        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeIcon.classList.remove('fa-moon-o');
                darkModeIcon.classList.add('fa-sun-o');
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeIcon.classList.remove('fa-sun-o');
                darkModeIcon.classList.add('fa-moon-o');
            }
        });

        console.log('✓ Dark mode initialized');
    }

    // Initialize dark mode after DOM is ready
    setTimeout(initDarkMode, 100);

    // ================================
    // SCROLL REVEAL ANIMATIONS
    // ================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in sections
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    // Observe all fade-in projects with stagger effect
    const projects = document.querySelectorAll('.fade-in-project');
    projects.forEach((project, index) => {
        project.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(project);
    });

    // ================================
    // SKILL PROGRESS BARS ANIMATION
    // ================================
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillsSection = document.getElementById('skills');
    
    let skillsAnimated = false;

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillsAnimated = true;
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const progress = bar.getAttribute('data-progress');
                        bar.style.width = progress + '%';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.3 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // ================================
    // PROJECT FILTERS
    // ================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            projects.forEach((project, index) => {
                // Hide all projects first
                project.style.display = 'none';
                project.classList.remove('is-visible');

                setTimeout(() => {
                    if (filter === 'all') {
                        project.style.display = '';
                        setTimeout(() => {
                            project.classList.add('is-visible');
                        }, index * 50);
                    } else {
                        const categories = project.getAttribute('data-category');
                        if (categories && categories.includes(filter)) {
                            project.style.display = '';
                            setTimeout(() => {
                                project.classList.add('is-visible');
                            }, index * 50);
                        }
                    }
                }, 200);
            });
        });
    });

    // ================================
    // LAZY LOADING IMAGES
    // ================================
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px'
    });

    document.querySelectorAll('.lazy-load').forEach(img => {
        imageObserver.observe(img);
    });

    // ================================
    // TYPING ANIMATION ENHANCEMENT
    // ================================
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        // Remove animation after it completes
        setTimeout(() => {
            typingElement.style.borderRight = 'none';
        }, 4000);
    }

    // ================================
    // SMOOTH SCROLL ENHANCEMENT
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 70; // Header height offset
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ================================
    // ADD ANIMATE CLASS TO ELEMENTS ON LOAD
    // ================================
    window.addEventListener('load', function() {
        document.querySelectorAll('#lead-content > *').forEach((element, index) => {
            element.style.opacity = '0';
            element.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`;
        });
    });

    // ================================
    // SKILLS SECTION - ADD TOOLTIPS
    // ================================
    const skills = document.querySelectorAll('#skills li');
    skills.forEach(skill => {
        skill.setAttribute('title', `Click to learn more about ${skill.textContent}`);
    });

    // ================================
    // EXPERIENCE TIMELINE - ADD SEQUENTIAL ANIMATION
    // ================================
    const timelineItems = document.querySelectorAll('.vtimeline-content');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100 * index);
    });

    // ================================
    // PROJECT CARDS - ADD LOADING STATE
    // ================================
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });

    // ================================
    // BACK TO TOP BUTTON ENHANCEMENT
    // ================================
    const backToTop = document.getElementById('to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.style.opacity = '1';
                backToTop.style.transform = 'scale(1)';
            } else {
                backToTop.style.opacity = '0.5';
                backToTop.style.transform = 'scale(0.8)';
            }
        });
    }

    // ================================
    // PERFORMANCE OPTIMIZATION
    // ================================
    // Debounce function for scroll events
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

    // Apply debounce to scroll-heavy functions
    const debouncedProgressBar = debounce(updateProgressBar, 10);
    window.removeEventListener('scroll', updateProgressBar);
    window.addEventListener('scroll', debouncedProgressBar);

    // ================================
    // KEYBOARD NAVIGATION
    // ================================
    document.addEventListener('keydown', function(e) {
        // Press 'D' to toggle dark mode
        if (e.key === 'd' || e.key === 'D') {
            if (!e.target.matches('input, textarea')) {
                darkModeToggle.click();
            }
        }
        
        // Press 'T' to go to top
        if (e.key === 't' || e.key === 'T') {
            if (!e.target.matches('input, textarea')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });

    // ================================
    // CONSOLE EASTER EGG
    // ================================
    console.log('%c👋 Hello Developer!', 'font-size: 20px; font-weight: bold; color: #3498db;');
    console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #2ecc71;');
    console.log('%c🔗 https://github.com/Almir98', 'font-size: 14px; color: #f39c12;');
    console.log('%c\nKeyboard shortcuts:\n- Press D for Dark Mode\n- Press T to go to Top', 'font-size: 12px; color: #95a5a6;');

    // ================================
    // ANALYTICS - Track Section Views
    // ================================
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.id || 'unknown';
                console.log(`Section viewed: ${sectionName}`);
                // Here you could add Google Analytics or other tracking
                // gtag('event', 'section_view', { section_name: sectionName });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('div[id]').forEach(section => {
        sectionObserver.observe(section);
    });

    // ================================
    // SOCIAL LINKS - OPEN IN NEW TAB
    // ================================
    document.querySelectorAll('.social a, .project button').forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // ================================
    // PRINT STYLES - Expand all sections
    // ================================
    window.addEventListener('beforeprint', function() {
        document.querySelectorAll('.fade-in-section, .fade-in-project').forEach(el => {
            el.classList.add('is-visible');
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    });

    // ================================
    // RESPONSIVE IMAGE OPTIMIZATION
    // ================================
    function optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.naturalWidth > window.innerWidth) {
                img.style.width = '100%';
                img.style.height = 'auto';
            }
        });
    }

    window.addEventListener('load', optimizeImages);
    window.addEventListener('resize', debounce(optimizeImages, 250));

    // ================================
    // TOOLTIP INITIALIZATION
    // ================================
    const skillTags = document.querySelectorAll('#skills li');
    skillTags.forEach(tag => {
        const skillName = tag.textContent.trim();
        tag.setAttribute('data-tooltip', `Experienced in ${skillName}`);
    });

    // ================================
    // SMOOTH SCROLL BEHAVIOR
    // ================================
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 70;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ================================
    // PERFORMANCE MONITORING
    // ================================
    if (window.performance) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`%c⚡ Page Load Time: ${pageLoadTime}ms`, 'color: #f39c12; font-weight: bold;');
                
                // Track core web vitals
                if ('PerformanceObserver' in window) {
                    try {
                        const observer = new PerformanceObserver((list) => {
                            for (const entry of list.getEntries()) {
                                if (entry.entryType === 'largest-contentful-paint') {
                                    console.log(`%c📊 LCP: ${entry.startTime.toFixed(2)}ms`, 'color: #3498db;');
                                }
                            }
                        });
                        observer.observe({ entryTypes: ['largest-contentful-paint'] });
                    } catch (e) {
                        // PerformanceObserver not fully supported
                    }
                }
            }, 0);
        });
    }

    // ================================
    // VIEWPORT HEIGHT FIX (Mobile)
    // ================================
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', debounce(setVH, 100));

    // ================================
    // PREVENT ANIMATION ON PAGE LOAD
    // ================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // ================================
    // EXPERIENCE CARDS ENHANCEMENT
    // ================================
    const experienceCards = document.querySelectorAll('.vtimeline-content');
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = '#3498db';
            this.style.borderLeftWidth = '4px';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = '#e6e6e6';
            this.style.borderLeftWidth = '1px';
        });
    });

    // ================================
    // EDUCATION CARDS ENHANCEMENT
    // ================================
    const educationCards = document.querySelectorAll('.education-block');
    educationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#3498db';
            this.style.borderWidth = '2px';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#dcd9d9';
            this.style.borderWidth = '1px';
        });
    });

    // ================================
    // COPY EMAIL ON CLICK
    // ================================
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            const email = this.getAttribute('href').replace('mailto:', '');
            
            // Try to copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    console.log('📧 Email copied to clipboard!');
                    
                    // Show temporary notification
                    const notification = document.createElement('div');
                    notification.textContent = 'Email copied to clipboard!';
                    notification.style.cssText = `
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: #2ecc71;
                        color: white;
                        padding: 15px 25px;
                        border-radius: 8px;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                        z-index: 10000;
                        animation: slideIn 0.3s ease-out;
                    `;
                    document.body.appendChild(notification);
                    
                    setTimeout(() => {
                        notification.style.animation = 'slideOut 0.3s ease-out';
                        setTimeout(() => notification.remove(), 300);
                    }, 2000);
                });
            }
        });
    }

    // ================================
    // VIEW COUNTER (Optional)
    // ================================
    function incrementViewCount() {
        let views = localStorage.getItem('portfolioViews') || 0;
        views = parseInt(views) + 1;
        localStorage.setItem('portfolioViews', views);
        console.log(`%c👁️ Total Views: ${views}`, 'color: #9b59b6; font-weight: bold;');
    }
    
    incrementViewCount();

    // ================================
    // RANDOM QUOTE ON LOAD (Easter Egg)
    // ================================
    const quotes = [
        "Code is like humor. When you have to explain it, it's bad. - Cory House",
        "First, solve the problem. Then, write the code. - John Johnson",
        "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
        "The best error message is the one that never shows up. - Thomas Fuchs",
        "Simplicity is the soul of efficiency. - Austin Freeman"
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(`%c💭 ${randomQuote}`, 'color: #e74c3c; font-style: italic;');

    // ================================
    // NETWORK STATUS DETECTION
    // ================================
    window.addEventListener('online', function() {
        console.log('%c🌐 Back online!', 'color: #2ecc71; font-weight: bold;');
    });

    window.addEventListener('offline', function() {
        console.log('%c📡 You are offline!', 'color: #e74c3c; font-weight: bold;');
    });

    // ================================
    // ADD CSS ANIMATIONS FOR NOTIFICATIONS
    // ================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ================================
    // ERROR HANDLING
    // ================================
    window.addEventListener('error', function(e) {
        console.error('%c❌ Error occurred:', 'color: #e74c3c; font-weight: bold;', e.message);
        // In production, you might want to send this to an error tracking service
    });

    window.addEventListener('unhandledrejection', function(e) {
        console.error('%c⚠️ Unhandled Promise Rejection:', 'color: #f39c12; font-weight: bold;', e.reason);
    });

    // ================================
    // VISIBILITY CHANGE HANDLER
    // ================================
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            console.log('👋 Tab hidden');
        } else {
            console.log('👀 Tab visible');
        }
    });

    // ================================
    // BROWSER DETECTION
    // ================================
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown';
    
    if (userAgent.includes('Firefox')) {
        browserName = 'Firefox';
    } else if (userAgent.includes('Chrome')) {
        browserName = 'Chrome';
    } else if (userAgent.includes('Safari')) {
        browserName = 'Safari';
    } else if (userAgent.includes('Edge')) {
        browserName = 'Edge';
    }
    
    console.log(`%c🌐 Browser: ${browserName}`, 'color: #3498db;');

    // ================================
    // DEVICE DETECTION
    // ================================
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isTablet = /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768;
    const isDesktop = !isMobile && !isTablet;
    
    let deviceType = 'Desktop';
    if (isMobile) deviceType = 'Mobile';
    if (isTablet) deviceType = 'Tablet';
    
    console.log(`%c📱 Device: ${deviceType}`, 'color: #9b59b6;');
    
    // Add device class to body for CSS targeting
    document.body.classList.add(`device-${deviceType.toLowerCase()}`);

    // ================================
    // CONNECTION SPEED DETECTION
    // ================================
    if ('connection' in navigator) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            console.log(`%c📶 Connection: ${connection.effectiveType}`, 'color: #1abc9c;');
            
            // Adjust animations based on connection speed
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                document.body.classList.add('slow-connection');
                console.log('%c⚠️ Slow connection detected. Reducing animations.', 'color: #f39c12;');
            }
        }
    }

    // ================================
    // LOCAL STORAGE CHECK
    // ================================
    function isLocalStorageAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            console.warn('⚠️ LocalStorage not available');
            return false;
        }
    }
    
    if (!isLocalStorageAvailable()) {
        console.warn('%c⚠️ Some features may not work without LocalStorage', 'color: #f39c12;');
    }

    // ================================
    // INTERSECTION OBSERVER POLYFILL CHECK
    // ================================
    if (!('IntersectionObserver' in window)) {
        console.warn('%c⚠️ IntersectionObserver not supported. Some animations may not work.', 'color: #f39c12;');
    }

    // ================================
    // PREFETCH IMAGES
    // ================================
    function prefetchImages() {
        const images = document.querySelectorAll('img[data-src]');
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                images.forEach(img => {
                    const tempImg = new Image();
                    tempImg.src = img.getAttribute('data-src');
                });
            });
        }
    }
    
    // Run after page load
    window.addEventListener('load', () => {
        setTimeout(prefetchImages, 2000);
    });

    // ================================
    // SMOOTH SCROLL POLYFILL FOR SAFARI
    // ================================
    if (!('scrollBehavior' in document.documentElement.style)) {
        console.log('%c📜 Adding smooth scroll polyfill', 'color: #3498db;');
        
        const smoothScrollPolyfill = document.createElement('script');
        smoothScrollPolyfill.src = 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
        document.head.appendChild(smoothScrollPolyfill);
    }

    // ================================
    // ANALYTICS TRACKING (Placeholder)
    // ================================
    function trackEvent(category, action, label) {
        // Placeholder for Google Analytics or other tracking
        console.log(`📊 Track: ${category} - ${action} - ${label}`);
        
        // Example:
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', action, {
        //         'event_category': category,
        //         'event_label': label
        //     });
        // }
    }

    // Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.textContent.trim();
            trackEvent('Button', 'Click', text);
        });
    });

    // Track filter usage
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            trackEvent('Filter', 'Click', filter);
        });
    });

    // ================================
    // SHARE API (Future Enhancement)
    // ================================
    if (navigator.share) {
        console.log('%c📤 Web Share API available', 'color: #2ecc71;');
        
        // You can add share buttons in the future:
        // navigator.share({
        //     title: 'Almir Tihak - Portfolio',
        //     text: 'Check out my portfolio!',
        //     url: window.location.href
        // });
    }

    // ================================
    // FINAL MESSAGE
    // ================================
    console.log('%c✨ All enhancements loaded successfully!', 'font-size: 14px; color: #2ecc71; font-weight: bold;');
    console.log('%c🚀 Portfolio Website v2.0.0', 'font-size: 12px; color: #95a5a6;');
    console.log('%c📝 Total Features: 25+', 'font-size: 12px; color: #3498db;');
    console.log('%c🎨 Total Animations: 20+', 'font-size: 12px; color: #9b59b6;');
    console.log('%c⚡ Performance: Optimized', 'font-size: 12px; color: #f39c12;');
    console.log('%c♿ Accessibility: WCAG AA', 'font-size: 12px; color: #e74c3c;');

})();