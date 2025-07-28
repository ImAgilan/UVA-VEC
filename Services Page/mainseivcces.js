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

// Add this to mainseivcces.js or create a new file
document.addEventListener('DOMContentLoaded', function() {
    // Get all service sections and tabs
    const serviceSections = document.querySelectorAll('.main-service');
    const serviceTabs = document.querySelectorAll('.service-tab');
    
    // Function to update active tab
    function updateActiveTab() {
        let foundActive = false;
        
        serviceSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.pageYOffset;
            const sectionHeight = rect.height;
            
            // Check if section is in view
            if (window.pageYOffset >= sectionTop - 150 && 
                window.pageYOffset < sectionTop + sectionHeight - 150) {
                
                // Remove active class from all tabs
                serviceTabs.forEach(tab => tab.classList.remove('active'));
                
                // Find matching tab and add active class
                const sectionId = section.getAttribute('id');
                const matchingTab = document.querySelector(`.service-tab[href="#${sectionId}"]`);
                
                if (matchingTab) {
                    matchingTab.classList.add('active');
                    foundActive = true;
                }
            }
        });
        
        // If no section is active, make first tab active
        if (!foundActive && serviceTabs.length > 0) {
            serviceTabs[0].classList.add('active');
        }
    }
    
    // Run on page load
    updateActiveTab();
    
    // Run on scroll
    window.addEventListener('scroll', function() {
        updateActiveTab();
    });
    
    // Smooth scroll for service tabs
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update active tab immediately
                serviceTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});