 // GSAP animations
        document.addEventListener('DOMContentLoaded', function() {
      
                // Hero section animations
gsap.to(".hero-text", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
});

gsap.to(".hero-subtext", {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

gsap.to(".cta-buttons", {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.6,
    ease: "power3.out"
});

gsap.to(".hero-visual", {
    scale: 1,
    opacity: 1,
    duration: 1,
    delay: 0.9,
    ease: "elastic.out(1, 0.5)"
});





            // About section animations
            gsap.to(".about-text h2", {
                scrollTrigger: {
                    trigger: ".about",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });
            
            gsap.to(".about-text p", {
                scrollTrigger: {
                    trigger: ".about",
                    start: "top 70%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.3,
                ease: "power3.out"
            });
            
            gsap.to(".stat-item", {
                scrollTrigger: {
                    trigger: ".about-stats",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            // Problem section animations
            gsap.to(".problem h2", {
                scrollTrigger: {
                    trigger: ".problem",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });
            
            gsap.to(".problem p, .problem .btn", {
                scrollTrigger: {
                    trigger: ".problem",
                    start: "top 70%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            // Trust cards animations
            gsap.to(".trust-card", {
                scrollTrigger: {
                    trigger: ".trust-cards",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            // Services section animations
            gsap.to(".services-header h2", {
                scrollTrigger: {
                    trigger: ".services-header",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            });
            
            gsap.to(".services-header p", {
                scrollTrigger: {
                    trigger: ".services-header",
                    start: "top 70%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });
            
            gsap.to(".service-badge", {
                scrollTrigger: {
                    trigger: ".service-row",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            gsap.to(".service-title", {
                scrollTrigger: {
                    trigger: ".service-row",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            gsap.to(".service-description", {
                scrollTrigger: {
                    trigger: ".service-row",
                    start: "top 70%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            gsap.to(".service-features li", {
                scrollTrigger: {
                    trigger: ".service-row",
                    start: "top 60%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
            
            gsap.to(".service-visual", {
                scrollTrigger: {
                    trigger: ".service-row",
                    start: "top 70%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            // Testimonials animations
            gsap.to(".testimonials h2", {
                scrollTrigger: {
                    trigger: ".testimonials",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });
            
            gsap.to(".testimonial-card", {
                scrollTrigger: {
                    trigger: ".testimonial-carousel",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            // Contact section animations
            gsap.to(".contact-content h2", {
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });
            
            gsap.to(".contact-content p", {
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "top 70%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });
            
            gsap.to(".contact-btn", {
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "top 60%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });
            
            // Footer animations
            gsap.to(".footer-column ul li", {
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
            
            gsap.to(".social-icon", {
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 70%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
            
            // Scroll indicator animation
            gsap.to(".scroll-indicator", {
                opacity: 1,
                delay: 2,
                duration: 1
            });
















            
            // Hide scroll indicator when scrolling
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    gsap.to(".scroll-indicator", {
                        opacity: 0,
                        duration: 0.5
                    });
                }
            });
            






















            // Hamburger menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
            














            // Hide/show navbar on scroll
            let lastScroll = 0;
            window.addEventListener('scroll', function() {
                const currentScroll = window.scrollY;
                
                if (currentScroll <= 0) {
                    document.querySelector('nav').classList.remove('hidden');
                    return;
                }
                
                if (currentScroll > lastScroll && !navLinks.classList.contains('active')) {
                    document.querySelector('nav').classList.add('hidden');
                } else {
                    document.querySelector('nav').classList.remove('hidden');
                }
                
                lastScroll = currentScroll;
            });
            









            
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
  











// Marquee animation with GSAP for better performance
const marqueeTrack = document.querySelector('.marquee-track');
const marqueeItems = document.querySelectorAll('.marquee-item');
const itemWidth = marqueeItems[0].offsetWidth;

// Calculate total width needed
const totalWidth = itemWidth * marqueeItems.length;

// Set the track width
marqueeTrack.style.width = `${totalWidth}px`;


gsap.to('.marquee-track', {
    x: `-=${totalWidth / 2}`,
    duration: 30,
    ease: 'none',
    repeat: -1
});


const heroSubtext = "We transform businesses into iconic brands through strategic design.";

gsap.to(".hero-subtext", {
    duration: 2.5,
    delay: 0.3,
    text: {
        value: heroSubtext,
        speed: 1, 
        delimiter: "", 
    },
    ease: "power3.out"
});


gsap.to(".hero-subtext", {
    delay: 0.3 + 2.5, // match delay + duration of typing animation
    onComplete: function() {
        document.querySelector('.hero-subtext').classList.add('gsap-text-complete');
    }
});



















document.addEventListener('DOMContentLoaded', function() {
    // Track if counters have been animated
    let countersAnimated = false;
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }
    
    // Function to animate a single counter
    function animateCounter(counter) {
        const target = +counter.getAttribute('data-count');
        const text = counter.innerText;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(progress * target);
            
            // Update counter text with proper suffix
            counter.innerText = currentValue + 
                              (hasPlus ? '+' : '') + 
                              (hasPercent ? '%' : '');
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        const aboutSection = document.querySelector('.about');
        
        if (aboutSection && isInViewport(aboutSection)) {
            aboutSection.classList.add('animate-active');
            
            // Only animate counters once
            if (!countersAnimated) {
                const counters = document.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    // Set initial value to 0 with correct suffix
                    const text = counter.innerText;
                    const hasPlus = text.includes('+');
                    const hasPercent = text.includes('%');
                    counter.innerText = '0' + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
                    
                    // Start animation
                    animateCounter(counter);
                });
                countersAnimated = true;
            }
        }
    }
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    }
    
    // Set up scroll event listener with debounce
    window.addEventListener('scroll', debounce(handleScrollAnimations, 50));
    
    // Run once on load in case section is already visible
    handleScrollAnimations();
});




















document.addEventListener('DOMContentLoaded', function() {
   
    function handleScrollAnimations() {
        const trustSection = document.querySelector('.trust-cards');
        if (isInViewport(trustSection)) {
            trustSection.classList.add('animate-active');
        }
    }
    
    // Check if function exists from about section, if not create it
    if (typeof isInViewport !== 'function') {
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.5
            );
        }
    }
    
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Check on load
});
















































// Testimonial Carousel
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let interval;
    
    // Initialize carousel
    function initCarousel() {
        testimonials[0].classList.add('active');
        indicators[0].classList.add('active');
        
        // Start auto rotation
        startAutoRotation();
        
        // Pause on hover
        document.querySelector('.testimonial-carousel').addEventListener('mouseenter', pauseAutoRotation);
        document.querySelector('.testimonial-carousel').addEventListener('mouseleave', startAutoRotation);
        
        // Indicator click events
        indicators.forEach(indicator => {
            indicator.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                goToTestimonial(index);
            });
        });
    }
    
    // Rotate to next testimonial
    function nextTestimonial() {
        let nextIndex = (currentIndex + 1) % testimonials.length;
        goToTestimonial(nextIndex);
    }
    
    // Go to specific testimonial
    function goToTestimonial(index) {
        // Don't do anything if we're already on this testimonial
        if (index === currentIndex) return;
        
        // Update classes
        testimonials[currentIndex].classList.remove('active');
        testimonials[currentIndex].classList.add('prev');
        
        indicators[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        testimonials[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
        
        // Remove prev class after animation completes
        setTimeout(() => {
            document.querySelector('.testimonial-card.prev')?.classList.remove('prev');
        }, 800);
    }
    
 
    function startAutoRotation() {
        clearInterval(interval);
        interval = setInterval(nextTestimonial, 1000); // Change every 4 seconds
    }
   
    function pauseAutoRotation() {
        clearInterval(interval);
    }
    
   
    gsap.to(".section-header h2", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    });
    
    gsap.to(".section-header p", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 70%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
    });
    

    initCarousel();
});

// Compact Testimonial Carousel
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.compact-testimonial');
    let currentIndex = 0;
    let carouselInterval;

    function showNextTestimonial() {
    
        testimonials[currentIndex].classList.remove('active');
        
      
        currentIndex = (currentIndex + 1) % testimonials.length;
        
     
        testimonials[currentIndex].classList.add('active');
    }

    function startCarousel() {
        
        clearInterval(carouselInterval);
        
        
        carouselInterval = setInterval(showNextTestimonial, 5000);
    }

    // Initialize carousel
    testimonials[0].classList.add('active');
    startCarousel();

  
    document.querySelector('.compact-carousel').addEventListener('mouseenter', function() {
        clearInterval(carouselInterval);
    });

    document.querySelector('.compact-carousel').addEventListener('mouseleave', startCarousel);
});































document.querySelectorAll('.trust-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x - rect.width/1.5}px`);
        card.style.setProperty('--mouse-y', `${y - rect.height/2}px`);
    });
});























document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with animation classes
    const animatedHeadings = document.querySelectorAll('.animate-heading');
    const animatedParagraphs = document.querySelectorAll('.animate-paragraph');
    const animatedCards = document.querySelectorAll('.animate-card');
    
    // Initialize Intersection Observer
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust bottom margin to trigger a bit earlier
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class based on element type
                if (entry.target.classList.contains('animate-heading')) {
                    entry.target.classList.add('fade-in-up');
                } else if (entry.target.classList.contains('animate-paragraph')) {
                    entry.target.classList.add('fade-in-up-delay');
                } else if (entry.target.classList.contains('animate-card')) {
                    // Stagger card animations
                    const index = Array.from(animatedCards).indexOf(entry.target);
                    entry.target.style.setProperty('--animation-delay', `${index * 0.15}s`);
                    entry.target.classList.add('fade-in-up-stagger');
                }
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    animatedHeadings.forEach(el => observer.observe(el));
    animatedParagraphs.forEach(el => observer.observe(el));
    animatedCards.forEach(el => observer.observe(el));
});