// Replace your existing subservice card toggle code with this:
const uvaVecSubserviceCards = document.querySelectorAll('.subservice-card');
uvaVecSubserviceCards.forEach(card => {
    const header = card.querySelector('.subservice-header');
    const toggleBtn = card.querySelector('.toggle-details');
    const details = card.querySelector('.subservice-details');
    
    if (header && toggleBtn && details) {
        header.addEventListener('click', function(e) {
            // Close all other open cards first
            uvaVecSubserviceCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    const otherDetails = otherCard.querySelector('.subservice-details');
                    const otherToggle = otherCard.querySelector('.toggle-details');
                    otherCard.classList.remove('active');
                    otherDetails.style.maxHeight = '0';
                    otherToggle.style.transform = '';
                }
            });

            // Toggle current card
            card.classList.toggle('active');
            
            if (card.classList.contains('active')) {
                // Calculate exact height needed
                details.style.maxHeight = details.scrollHeight + 'px';
                toggleBtn.style.transform = 'rotate(180deg)';
            } else {
                details.style.maxHeight = '0';
                toggleBtn.style.transform = '';
            }
        });
        
        // Initialize all cards as closed
        details.style.maxHeight = '0';
    }
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
;