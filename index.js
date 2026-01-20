 // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Interactive hero section - typing effect for slogan
        const heroTitle = document.querySelector('.hero h1');
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after page loads
        window.addEventListener('load', function() {
            setTimeout(typeWriter, 500);
        });
        
        // Stats counter animation
        const statNumbers = document.querySelectorAll('.stat-number');
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumber = entry.target;
                    const target = parseInt(statNumber.textContent);
                    let count = 0;
                    const increment = target / 50;
                    
                    const updateCount = () => {
                        if (count < target) {
                            count += increment;
                            statNumber.textContent = Math.ceil(count);
                            setTimeout(updateCount, 30);
                        } else {
                            statNumber.textContent = target;
                        }
                    };
                    
                    updateCount();
                    observer.unobserve(statNumber);
                }
            });
        }, observerOptions);
        
        statNumbers.forEach(stat => {
            if (!isNaN(parseInt(stat.textContent))) {
                observer.observe(stat);
            }
        });