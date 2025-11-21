// Download button functionality
document.getElementById('download-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const apkUrl = 'https://expo.dev/artifacts/eas/7QXPufyLrrerJVCGPNsndj.apk';
    window.location.href = apkUrl;
});

// Modal functionality
const modal = document.getElementById('feedback-modal');
const openModalBtn = document.getElementById('share-feedback-btn');
const closeModalBtn = document.getElementById('close-modal');
const feedbackForm = document.getElementById('feedback-form');

// Open modal
openModalBtn.addEventListener('click', function() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close modal
closeModalBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Feedback form submission
feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const feedback = this.querySelector('textarea').value;
    
    // Here you would typically send this to a backend
    alert(`Thank you, ${name}! Your feedback has been submitted. We appreciate your input!`);
    
    // Reset form and close modal
    this.reset();
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

