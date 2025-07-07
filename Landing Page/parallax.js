// parallax.js
document.addEventListener('DOMContentLoaded', function() {
    const layers = document.querySelectorAll('.parallax-layer');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        layers.forEach((layer, index) => {
            const depth = index * 0.2;
            const movement = scrollTop * depth;
            layer.style.transform = `translate3d(0, ${movement}px, 0)`;
        });
    });
});