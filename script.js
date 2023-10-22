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
