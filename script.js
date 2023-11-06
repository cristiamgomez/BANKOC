
const anuncio = document.getElementById("anuncio");


function mostrarAnuncio(texto, enlace) {
    anuncio.innerHTML = `
        <div class="anuncio">
            <p>${texto}</p>
            <a href="${enlace}" class="enlace-anuncio">IR A VER</a>
        </div>
    `;
}


mostrarAnuncio("¡PROGRAMAS TECNICOS!", "https://www.cesde.edu.co/educaciondigital/");

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const buttonClicked = event.submitter; 

    if (buttonClicked.id === "loginBtn") {
        window.location.href = "login.html"; 
    } else if (buttonClicked.id === "checkInBtn") {
        window.location.href = "registro.html"; 
    }
});