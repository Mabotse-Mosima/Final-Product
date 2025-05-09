document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting normally

        // Simulate form submission
        // Optionally, you can use AJAX to send the form data to the server here

        // After the form is successfully "submitted," redirect to the recruiters' dashboard
        window.location.href = 'profileCard.html';  // Replace with the actual dashboard URL
    });
});
