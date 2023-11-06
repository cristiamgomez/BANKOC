document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('pwd').value;

        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        let loginSuccess = false;

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.username === username && user.password === password) {
                window.location.href = "consul_movi.html";
                alert('Inicio de sesión exitoso');
                loginSuccess = true;
                break;
            }
        }

        if (!loginSuccess) {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    });
});
