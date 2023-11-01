document.addEventListener('DOMContentLoaded', function () {
    const users = []; // Vector para almacenar usuarios

    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const identification = document.getElementById('identification').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (identification === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Por favor, complete todos los campos.');
        } else if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
        } else {
            const newUser = {
                identification,
                username,
                email,
                password
            };

            users.push(newUser);
            alert('Usuario registrado correctamente.');
            window.location.href = 'login.html';
        }
    });

    loginForm.addEventListener ('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('pwd').value;
        let loginSuccess = false;

        const user = users[i];
        for (let i = 0; i < users.length; i++) {
            if (user.username === username && user.password === password) {
                alert('Inicio de sesión exitoso');
                loginSuccess = true;
                window.location.href = 'consul_movi.html'; // Redirigir a la página deseada después del inicio de sesión exitoso
                break;
            }
        }

        if (!loginSuccess) {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    });
});