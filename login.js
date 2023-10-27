document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('pwd').value;

        // Realizar la validación del nombre de usuario y la contraseña aquí
        if (username === 'usuario_valido' && password === 'contrasena_valida') {
            alert('Inicio de sesión exitoso');
            // Redirigir o realizar otras acciones después del inicio de sesión exitoso
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
            // Puedes mostrar un mensaje de error o realizar otras acciones si la autenticación falla
        }
    });
});