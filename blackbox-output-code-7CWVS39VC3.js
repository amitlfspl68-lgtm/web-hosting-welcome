document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! We will respond soon.');
    // Integrate with a service like Formspree or EmailJS for real email sending.
});