// Brian Lovin website interactions
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Add transition class for smooth switching
        document.body.classList.add('theme-transitioning');
        
        // Update theme
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add a subtle animation effect using opacity instead of transform
        document.body.style.opacity = '0.98';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 150);
        
        // Remove transition class after animation
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 300);
        
        // Add haptic feedback for mobile devices
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    });
    
    // Sidebar navigation functionality
    const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');
    const currentPath = window.location.hash || '#home';
    
    // Set active state for current page
    function setActiveNavLink() {
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize active state
    setActiveNavLink();
    
    // Add click handlers for sidebar navigation
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section if it exists
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add hover effects to project links
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add subtle animations to work items
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Add subtle animations to speaking items
    const speakingItems = document.querySelectorAll('.speaking-item');
    speakingItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, (index * 50) + 500);
    });

    // Focus styles are handled by CSS for consistent theming

    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Tab navigation
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add some micro-interactions
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }

    // Add hover effect to location
    const locationElement = document.querySelector('.location');
    if (locationElement) {
        locationElement.addEventListener('mouseenter', function() {
            const mapDot = this.querySelector('.map-dot');
            if (mapDot) {
                mapDot.style.transform = 'scale(1.2)';
                mapDot.style.transition = 'transform 0.3s ease';
            }
        });
        
        locationElement.addEventListener('mouseleave', function() {
            const mapDot = this.querySelector('.map-dot');
            if (mapDot) {
                mapDot.style.transform = 'scale(1)';
            }
        });
    }

    // Add click effect to project links
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(59, 130, 246, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS animation for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .sidebar .nav-link.active {
            color: #ffffff !important;
            background-color: rgba(59, 130, 246, 0.1);
            border-radius: 6px;
            padding: 8px 12px;
            margin: 0 -12px;
        }
    `;
    document.head.appendChild(style);

    // Add sidebar scroll indicator
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const sidebarHeight = sidebar.scrollHeight;
            const windowHeight = window.innerHeight;
            
            if (scrollTop > 100) {
                sidebar.style.boxShadow = '2px 0 20px rgba(0, 0, 0, 0.3)';
            } else {
                sidebar.style.boxShadow = 'none';
            }
        });
    }

    // Add mobile sidebar toggle for smaller screens
    const createMobileToggle = () => {
        if (window.innerWidth <= 768) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'mobile-sidebar-toggle';
            toggleButton.innerHTML = '☰';
            toggleButton.style.cssText = `
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 1000;
                background: #1a1a1a;
                border: 1px solid #262626;
                color: white;
                padding: 12px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 18px;
                display: none;
            `;
            
            document.body.appendChild(toggleButton);
            
            toggleButton.addEventListener('click', function() {
                sidebar.classList.toggle('mobile-open');
            });
            
            // Show toggle button on mobile
            if (window.innerWidth <= 768) {
                toggleButton.style.display = 'block';
            }
        }
    };

    // Initialize mobile toggle
    createMobileToggle();
    
    // Handle window resize
    window.addEventListener('resize', createMobileToggle);
});
