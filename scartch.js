document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var errorMessage = document.getElementById('error-message');
    
    if (username === 'Preyaansh Vij' && password === 'BT23GCS168') {
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Try again';
    }
});
