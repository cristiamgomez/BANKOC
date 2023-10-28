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

let sumaTotal = 0;
const movimientos = []; // Arreglo para almacenar los movimientos

const consignar = document.getElementById('consignar');
consignar.addEventListener('click', function() {
    const valorIngresado = prompt("Cuanto deseas consignar");

    if (valorIngresado !== null && !isNaN(valorIngresado)) {
        const numero = parseFloat(valorIngresado);
        sumaTotal += numero;

        movimientos.push(`Consignación de ${numero} pesos`);
        console.log(`Consignación de ${numero} pesos`);

        const valorTotalMostrado = document.getElementById('valorTotal');

        alert(`El valor ${numero} ha sido consignado con éxito.`);
    } else {
        console.log("No se ingresó un número válido.");
    }
});

const retirar = document.getElementById('retirar');
retirar.addEventListener('click', function() {
    const valorRetirar = prompt("Valor a retirar");

    if (valorRetirar !== null && !isNaN(valorRetirar)) {
        const numeroRetiro = parseFloat(valorRetirar);
        if (numeroRetiro <= sumaTotal) {
            sumaTotal -= numeroRetiro;

            // Registrar el movimiento de retiro
            movimientos.push(`Retiro de ${numeroRetiro} pesos`);
            console.log(`Retiro de ${numeroRetiro} pesos`);

            const valorTotalMostrado = document.getElementById('valorTotal');

            alert(`Se ha retirado ${numeroRetiro} con éxito.`);
        } else {
            alert("No tienes suficiente dinero para realizar este retiro.");
        }
    } else {
        console.log("No se ingresó un número válido para el retiro.");
    }
});

const botonConsultar = document.getElementById('consultar');
botonConsultar.addEventListener('click', function() {
    alert(`En tu cuenta hay ${sumaTotal} Pesos`);
});

const mostrarMovimientos = document.getElementById('movimientos');
mostrarMovimientos.addEventListener('click', function() {
    movimientos.forEach(movimiento => {
    });

    let listaMovimientos = "Movimientos:\n";
    movimientos.forEach(movimiento => {
        listaMovimientos += `- ${movimiento}\n`;
    });
    alert(listaMovimientos);
});
