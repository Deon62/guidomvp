// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Download button functionality
document.getElementById('download-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Replace '#' with your actual APK download link
    const apkUrl = '#'; // TODO: Replace with actual APK URL
    if (apkUrl && apkUrl !== '#') {
        window.location.href = apkUrl;
    } else {
        alert('APK download link will be available soon!');
    }
});

// Feature request form submission
document.getElementById('feature-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Here you would typically send this to a backend
    alert(`Thank you, ${name}! Your feature request has been submitted. We'll review it and get back to you at ${email}.`);
    
    // Reset form
    this.reset();
});

