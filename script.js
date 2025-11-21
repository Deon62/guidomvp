// Request Modal - Show on page load
const requestModal = document.getElementById('request-modal');
const okayBtn = document.getElementById('okay-btn');

// Show request modal when page loads
window.addEventListener('load', function() {
    requestModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close request modal with Okay button
okayBtn.addEventListener('click', function() {
    requestModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close request modal when clicking outside
requestModal.addEventListener('click', function(e) {
    if (e.target === requestModal) {
        requestModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close request modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && requestModal.classList.contains('active')) {
        requestModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

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
feedbackForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    try {
        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show success message
            this.style.display = 'none';
            const successMessage = document.getElementById('success-message');
            successMessage.style.display = 'flex';
            
            // Reset form and button
            this.reset();
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            
            // Close modal after 3 seconds
            setTimeout(function() {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                // Reset to form view
                feedbackForm.style.display = '';
                successMessage.style.display = 'none';
            }, 3000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        alert('Sorry, there was an error submitting your feedback. Please try again.');
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

