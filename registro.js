const users = []; // Vector para almacenar usuarios

const registrationForm = document.getElementById('registrationForm');

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

        // Exportar datos
        exportUserData(users);
        window.location.href = 'login.html';
        
    }
});

function exportUserData(data) {
    localStorage.setItem('registeredUsers', JSON.stringify(data));
}