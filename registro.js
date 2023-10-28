document.addEventListener('DOMContentLoaded', function () {
    const users = []; // Vector para almacenar usuarios

    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario de registro
        const identification = document.getElementById('identification').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Realizar validación básica
        if (identification === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Por favor, complete todos los campos.');
        } else if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
        } else {
            // Si pasa todas las validaciones, agregamos el usuario al vector
            const newUser = {
                identification,
                username,
                email,
                password
            };

            users.push(newUser); // Agregar usuario al vector
            alert('Usuario registrado correctamente.');
            console.log('Usuarios registrados:', users);
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario de inicio de sesión
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Buscar si el usuario existe en el vector
        const foundUser = users.find(user => user.email === loginEmail && user.password === loginPassword);

        if (foundUser) {
            alert('Inicio de sesión exitoso.');
            console.log('Bienvenido, ' + foundUser.username + '!');
        } else {
            alert('Credenciales incorrectas. Por favor, intente de nuevo.');
        }
    });
});