document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvp-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const attendingInput = document.getElementById('attending');
    const dinnerInput = document.getElementById('dinner');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-button');
    const responseMessage = document.getElementById('response-message');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const attending = attendingInput.value;
            const dinner = dinnerInput.value;
            const message = messageInput.value.trim();

            if (validateForm(name, email, attending)) {
                // Simulate form submission
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';

                // Simulate API call
                setTimeout(function() {
                    responseMessage.textContent = 'Thank you for your RSVP, ' + name + '!';
                    responseMessage.style.color = '#8B5A2B';
                    rsvpForm.reset();
                    submitButton.textContent = 'Send RSVP';
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    }

    function validateForm(name, email, attending) {
        if (name === '') {
            showError('Please enter your name.');
            return false;
        }
        if (email === '' || !validateEmail(email)) {
            showError('Please enter a valid email address.');
            return false;
        }
        if (attending === '' || attending === null) {
            showError('Please indicate whether you can attend.');
            return false;
        }
        return true;
    }

    function showError(message) {
        responseMessage.textContent = message;
        responseMessage.style.color = '#cc0000';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});