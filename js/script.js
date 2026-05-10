document.addEventListener('DOMContentLoaded', function () {
    try { lucide.createIcons(); } catch (e) { console.warn('Lucide failed:', e); }
    loadSections();

    // Scroll progress bar
    var bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:0;left:0;width:0%;height:3px;background:var(--smiley-happy);z-index:1000;transition:width 0.1s ease;';
    document.body.appendChild(bar);

    window.addEventListener('scroll', function () {
        var pct = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100;
        bar.style.width = pct + '%';
    });

    // Scroll arrow
    var arrow = document.querySelector('.scroll-arrow');
    if (arrow) {
        arrow.addEventListener('click', function () {
            var first = document.getElementById('sections-container').firstElementChild;
            if (first) first.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

async function loadSections() {
    var container = document.getElementById('sections-container');
    var sections = [
        'sections/methodology.html',
        'sections/category-risk.html',
        'sections/cuisine-risk.html',
        'sections/chain-branches.html',
        'sections/inspection-improvement.html',
        'sections/failed-inspections-map.html',
        'sections/conclusion.html',
    ];

    for (var file of sections) {
        try {
            console.log('Loading:', file);
            var res = await fetch(file);
            if (!res.ok) { console.warn('Failed to load:', file, res.status); continue; }

            var wrapper = document.createElement('div');
            wrapper.innerHTML = await res.text();

            // innerHTML doesn't execute scripts — re-create and append them
            wrapper.querySelectorAll('script').forEach(function (old) {
                var s = document.createElement('script');
                if (old.src) s.src = old.src; else s.textContent = old.textContent;
                wrapper.appendChild(s);
                old.remove();
            });

            container.appendChild(wrapper);
            console.log('Loaded OK:', file);
        } catch (e) {
            console.error('Error loading ' + file + ':', e);
        }
    }
    console.log('All sections done');

    // Hover effect on hero smileys (runs after DOM is ready)
    document.querySelectorAll('.hero .smiley').forEach(function (el) {
        el.addEventListener('mouseenter', function () { el.style.transform = 'scale(1.1)'; el.style.transition = 'transform 0.2s ease'; });
        el.addEventListener('mouseleave', function () { el.style.transform = 'scale(1)'; });
    });
}
