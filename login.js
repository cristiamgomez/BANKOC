document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('pwd').value;
        let i=1

        while(i<=3){
        // Realizar la validación del nombre de usuario y la contraseña aquí
             if (username === 'usuario_valido' && password === 'contrasena_valida') {
                alert('Inicio de sesión exitoso'+i++);
                // Redirigir o realizar otras acciones después del inicio de sesión exitoso
            } else {
                alert('Nombre de usuario o contraseña incorrectos'+i++);
            }
        }
            alert('Clave bloqueada por 24H')
        
    });
});