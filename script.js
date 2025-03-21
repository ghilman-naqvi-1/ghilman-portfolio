// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    const headerTimeline = gsap.timeline();
    headerTimeline.from('nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Optimize slider animation for mobile
    function optimizeSlider() {
        const container = document.querySelector('.image-container');
        if (window.innerWidth <= 480) {
            // Reduce animation duration on mobile to prevent lag
            const slider = document.querySelector('.image-slider');
            if (slider) {
                slider.style.animationDuration = '45s';
            }
        }
    }
    
    // Call on page load
    optimizeSlider();
    
    // Call on window resize
    window.addEventListener('resize', optimizeSlider);

    headerTimeline.from('.sub-container h1', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5');

    headerTimeline.from('.sub-container p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5');

    // Buttons GSAP animation
    headerTimeline.from('.btns button', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out',
        clearProps: 'all' // Clear properties after animation
    }, '-=0.5');
    
    // Add click events for header buttons
    const blogBtn = document.querySelector('.blog-btn');
    const journeyBtn = document.querySelector('.journey-btn');
    
    if (blogBtn) {
        blogBtn.addEventListener('click', function() {
            document.querySelector('#Blogs').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (journeyBtn) {
        journeyBtn.addEventListener('click', function() {
            document.querySelector('#About').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // About section animations
    gsap.from('#About .section-title', {
        scrollTrigger: {
            trigger: '#About',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });

    gsap.from('.parent', {
        scrollTrigger: {
            trigger: '.parent',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });

    gsap.from('.parent-2', {
        scrollTrigger: {
            trigger: '.parent-2',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });

    // Skills section animations
    gsap.from('#Skills .section-title', {
        scrollTrigger: {
            trigger: '#Skills',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });

    // Animate skill progress bars when they come into view
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
        const progress = skill.getAttribute('data-progress');
        gsap.to(skill, {
            scrollTrigger: {
                trigger: skill,
                start: 'top 90%',
            },
            width: progress,
            duration: 1.5,
            ease: 'power3.out'
        });
    });

    // Projects section animations
    gsap.from('#Projects .section-title', {
        scrollTrigger: {
            trigger: '#Projects',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });

    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-container',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8
    });

    // Blogs section animations
    gsap.from('#Blogs .section-title', {
        scrollTrigger: {
            trigger: '#Blogs',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });

    gsap.from('.blog-card', {
        scrollTrigger: {
            trigger: '.blogs-container',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8
    });

    // Contact section animations
    gsap.from('#Contact .section-title', {
        scrollTrigger: {
            trigger: '#Contact',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });

    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-container',
            start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-container',
            start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        duration: 0.8
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const checkbox = document.getElementById('click');
                if (checkbox.checked) {
                    checkbox.checked = false;
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});