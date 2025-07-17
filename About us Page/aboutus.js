document.addEventListener('DOMContentLoaded', function() {
    const milestones = document.querySelectorAll('.stepper-milestone');
    const progressFill = document.querySelector('.progress-fill');
    
    // Set up Intersection Observer for animation triggers
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate progress bar
                progressFill.style.width = '100%';
                
                // Animate milestones sequentially
                milestones.forEach((milestone, index) => {
                    setTimeout(() => {
                        milestone.classList.add('active');
                        
                        // Show year in the circle
                        const year = milestone.getAttribute('data-year');
                        const numberCircle = milestone.querySelector('.milestone-number');
                        numberCircle.setAttribute('data-year', year);
                    }, index * 300);
                });
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.stepper-timeline'));
    
    // Click handler for manual navigation
    milestones.forEach(milestone => {
        milestone.addEventListener('click', function() {
            const index = Array.from(milestones).indexOf(this);
            const progressPercentage = (index / (milestones.length - 1)) * 100;
            
            // Update progress bar
            progressFill.style.width = `${progressPercentage}%`;
            
            // Update active states
            milestones.forEach((m, i) => {
                if (i <= index) {
                    m.classList.add('active');
                } else {
                    m.classList.remove('active');
                }
            });
        });
    });
});