// resources.js
document.addEventListener('DOMContentLoaded', function() {
    // Category filtering functionality
    const categoryTabs = document.querySelectorAll('.category-tab');
    const resourceCards = document.querySelectorAll('.resource-card');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Filter resources
            resourceCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Load more button functionality
    const loadMoreBtn = document.querySelector('.load-more button');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real implementation, this would fetch more resources via AJAX
            this.textContent = 'All Resources Loaded';
            this.disabled = true;
        });
    }
});