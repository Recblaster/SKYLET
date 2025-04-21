document.querySelectorAll('.toc-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Cloudflare challenge script
(function(){
    var a = document.createElement('script');
    a.src = '/cdn-cgi/challenge-platform/h/g/scripts/jsd/6d97db85/main.js';
    document.head.appendChild(a);
})();