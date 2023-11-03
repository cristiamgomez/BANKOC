document.addEventListener('DOMContentLoaded', function () {
    const users = []; // Vector para almacenar usuarios

    

    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('pwd').value;
        let loginSuccess = false;

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
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