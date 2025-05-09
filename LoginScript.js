document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    
    fetch('login.php', {
        method: 'POST',
        body: formData
    }).then(response => response.text()).then(data => {
        alert(data);
    }).catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    
    fetch('signup.php', {
        method: 'POST',
        body: formData
    }).then(response => response.text()).then(data => {
        alert(data);
    }).catch(error => {
        console.error('Error:', error);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        window.location.href = 'Seekers-dashboard.html';  
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        window.location.href = 'Job Seeker profile page.html'; 
    });
});
