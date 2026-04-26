// Simple JavaScript for the simplified website
// Inspired by the original project's interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Load sections dynamically
    loadSections();

    // Smooth scrolling for navigation (if you add navigation later)
    const scrollIndicator = document.querySelector('.scroll-arrow');

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('.section');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Simple scroll progress indicator (inspired by ScrollProgress component)
    const hero = document.querySelector('.hero');
    let progressBar = null;

    function createProgressBar() {
        progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.width = '0%';
        progressBar.style.height = '3px';
        progressBar.style.backgroundColor = 'var(--smiley-happy)';
        progressBar.style.zIndex = '1000';
        progressBar.style.transition = 'width 0.1s ease';
        document.body.appendChild(progressBar);
    }

    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    }

    createProgressBar();
    window.addEventListener('scroll', updateProgress);
});

// Function to load sections from separate HTML files
async function loadSections() {
    const sections = [
        { id: 'key-findings', file: 'sections/key-findings.html' },
        { id: 'methodology', file: 'sections/methodology.html' },
        { id: 'conclusion', file: 'sections/conclusion.html' }
    ];

    for (const section of sections) {
        try {
            const response = await fetch(section.file);
            if (response.ok) {
                const html = await response.text();
                // Insert the section content before the script tag
                const scriptTag = document.querySelector('script[src="script.js"]');
                scriptTag.insertAdjacentHTML('beforebegin', html);
            } else {
                console.warn(`Failed to load section: ${section.file}`);
            }
        } catch (error) {
            console.warn(`Error loading section ${section.file}:`, error);
        }
    }

    // After loading sections, initialize animations
    setTimeout(initializeAnimations, 100);
}

// Function to initialize animations for dynamically loaded content
function initializeAnimations() {
    // Add intersection observer for fade-in animations (similar to original)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in animation to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Add hover effects to only the hero smileys
    const smileys = document.querySelectorAll('.hero .smiley');
    smileys.forEach(smiley => {
        smiley.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
        });

        smiley.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}