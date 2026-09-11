// Easter Egg: Double-click logo to reveal hidden event page
let logoClickCount = 0;
let logoClickTimeout;

document.addEventListener('DOMContentLoaded', function() {
    // Logo double-click Easter egg
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            logoClickCount++;
            clearTimeout(logoClickTimeout);

            // Reset count after 500ms
            logoClickTimeout = setTimeout(() => {
                logoClickCount = 0;
            }, 500);

            // Double-click detected
            if (logoClickCount === 2) {
                triggerEasterEgg();
                logoClickCount = 0;
            }
        });
    }

    // Handle registration form submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(registrationForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                studentid: formData.get('studentid'),
                year: formData.get('year'),
                department: formData.get('department'),
                interests: formData.getAll('interests'),
                motivation: formData.get('motivation'),
                availability: formData.get('availability'),
                submittedAt: new Date().toLocaleString()
            };

            // Store in localStorage (for demo purposes)
            let submissions = JSON.parse(localStorage.getItem('registrations')) || [];
            submissions.push(data);
            localStorage.setItem('registrations', JSON.stringify(submissions));

            // Show success message
            registrationForm.style.display = 'none';
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
            }

            // Log to console
            console.log('Registration submitted:', data);
        });
    }

    // Add subtle animations on page load
    animateElementsOnLoad();
});

// Trigger Easter Egg - Redirect to hidden event page
function triggerEasterEgg() {
    // Show a fun alert before redirecting
    const messages = [
        '🎉 You found the Easter egg!',
        '✨ Special surprise unlocked!',
        '🎊 Something amazing is coming...'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log(randomMessage);
    
    // Redirect to hidden page after a short delay
    setTimeout(() => {
        window.location.href = 'hidden-event.html';
    }, 300);
}

// Animate elements on load
function animateElementsOnLoad() {
    const elements = document.querySelectorAll('.feature-card, .content-section, .gallery-item');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Add keyboard shortcut for Easter egg
document.addEventListener('keydown', function(e) {
    // Press "E" twice quickly to trigger Easter egg
    if (e.key.toLowerCase() === 'e') {
        logoClickCount++;
        setTimeout(() => { logoClickCount = 0; }, 500);
        
        if (logoClickCount === 2) {
            triggerEasterEgg();
        }
    }
});