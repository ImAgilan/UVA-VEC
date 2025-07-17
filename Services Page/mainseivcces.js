document.addEventListener('DOMContentLoaded', function() {
    // Toggle subservice details
    const toggleButtons = document.querySelectorAll('.toggle-details');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.subservice-card');
            card.classList.toggle('active');
            
            // Close other open cards in the same section
            if (card.classList.contains('active')) {
                const parentGrid = card.closest('.subservices-grid');
                const allCards = parentGrid.querySelectorAll('.subservice-card');
                
                allCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('active')) {
                        otherCard.classList.remove('active');
                    }
                });
            }
        });
    });







































    
    
    // Service tab navigation
    const serviceTabs = document.querySelectorAll('.service-tab');
    
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active tab
            serviceTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active service based on scroll position
    const serviceSections = document.querySelectorAll('.main-service');
    
    function updateActiveService() {
        let closestSection = null;
        let closestDistance = Infinity;
        
        serviceSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = section;
            }
        });
        
        if (closestSection) {
            const activeId = closestSection.id;
            serviceTabs.forEach(tab => {
                tab.classList.toggle('active', tab.getAttribute('href') === `#${activeId}`);
            });
        }
    }
    
    window.addEventListener('scroll', updateActiveService);
    updateActiveService(); // Initial check
    
    // Animate cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.subservice-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});