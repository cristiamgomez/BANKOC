// Obtén la referencia al elemento del anuncio
const anuncio = document.getElementById("anuncio");

// Define una función para mostrar un anuncio
function mostrarAnuncio(texto, enlace) {
    anuncio.innerHTML = `
        <div class="anuncio">
            <p>${texto}</p>
            <a href="${enlace}" class="enlace-anuncio">IR A VER</a>
        </div>
    `;
}

// Llama a la función para mostrar un anuncio específico
mostrarAnuncio("¡PROGRAMAS TECNICOS!", "https://www.cesde.edu.co/educaciondigital/");

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    const buttonClicked = event.submitter; // Obtener el botón de envío que fue presionado

    if (buttonClicked.id === "loginBtn") {
        window.location.href = "login.html"; // Redirigir a la página de inicio de sesión (log in)
    } else if (buttonClicked.id === "checkInBtn") {
        window.location.href = "registro.html"; // Redirigir a la página de check in
    }
});