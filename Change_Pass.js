
const usuario = {
    contrasena: "contrasena123"
};


function cambiarContrasena() {

    const nuevaContrasena = nuevaContrasenaInput.value;
    const confirmarContrasena = confirmarContrasenaInput.value;


    if (nuevaContrasena !== "" && nuevaContrasena === confirmarContrasena) {

        usuario.contrasena = nuevaContrasena;


        console.log("Contraseña cambiada exitosamente. Nueva contraseña: " + nuevaContrasena);

        nuevaContrasenaInput.value = '';
        confirmarContrasenaInput.value = '';
    } else {

        console.log('Las contraseñas no coinciden o están vacías. Por favor, intenta de nuevo.');
    }
}


const nuevaContrasenaInput = document.getElementById('nuevaContrasena');
const confirmarContrasenaInput = document.getElementById('confirmarContrasena');
const cambiarContrasenaBtn = document.getElementById('cambiarContrasenaBtn');

cambiarContrasenaBtn.addEventListener('click', cambiarContrasena);