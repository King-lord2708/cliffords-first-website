/*
// ------------------------------
// Set current year in footer
// ------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// ------------------------------
// Dark/Light Mode Toggle
// ------------------------------
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Update toggle button icon
    if (document.body.classList.contains('light-mode')) {
        darkToggle.textContent = '🌙'; // moon for dark mode
    } else {
        darkToggle.textContent = '☀️'; // sun for light mode
    }
});

// ------------------------------
// Form Validation & Submission
// ------------------------------
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const subject = this.subject.value.trim();
    const message = this.message.value.trim();
    const feedback = document.getElementById('feedback');

    // Simple email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate all fields
    if (!name || !email || !subject || !message) {
        feedback.style.color = 'red';
        feedback.textContent = 'Please fill in all fields!';
        return;
    }

    if (!emailPattern.test(email)) {
        feedback.style.color = 'red';
        feedback.textContent = 'Please enter a valid email!';
        return;
    }

    // Success
    feedback.style.color = 'lightgreen';
    feedback.textContent = '✅ Message sent successfully!';

    // Save form data to localStorage
    const formData = { name, email, subject, message };
    localStorage.setItem('contactData', JSON.stringify(formData));

    // Reset form
    this.reset();
});