document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos
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
            // Si pasa todas las validaciones, puedes enviar los datos al servidor o realizar otras acciones.
            alert('Formulario enviado correctamente.');
            // Aquí puedes agregar código para enviar los datos al servidor.
        }
    });
});

