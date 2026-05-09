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
    const container = document.getElementById('sections-container');
    const sections = [
        'sections/key-findings.html',
        'sections/inspection-improvement.html',
        'sections/methodology.html',
        'sections/conclusion.html',
    ];

    for (const file of sections) {
        try {
            const response = await fetch(file);
            if (!response.ok) { console.warn(`Failed to load: ${file}`); continue; }
            const html = await response.text();

            // Inject HTML
            const wrapper = document.createElement('div');
            wrapper.innerHTML = html;

            // Re-execute <script> tags (innerHTML doesn't run them)
            wrapper.querySelectorAll('script').forEach(old => {
                const s = document.createElement('script');
                if (old.src) s.src = old.src; else s.textContent = old.textContent;
                wrapper.appendChild(s);
                old.remove();
            });

            container.appendChild(wrapper);
        } catch (error) {
            console.warn(`Error loading ${file}:`, error);
        }
    }

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
        const rect = section.getBoundingClientRect();
        const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (!alreadyVisible) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
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