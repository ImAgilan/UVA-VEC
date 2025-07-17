document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const statusElement = form.querySelector('.form-status');
    
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        statusElement.textContent = data.message;
        statusElement.style.color = response.ok ? 'green' : 'red';
        if (response.ok) form.reset();
    })
    .catch(error => {
        statusElement.textContent = 'Network error. Please try again.';
        statusElement.style.color = 'red';
    });
});