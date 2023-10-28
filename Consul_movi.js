let sumaTotal = 0;
const movimientos = []; // Arreglo para almacenar los movimientos

const Send = document.getElementById('Send');
Send.addEventListener('click', function() {
    const valorIngresado = prompt("Digite saldo a consignar");

    if (valorIngresado !== null && !isNaN(valorIngresado)) {
        const numero = parseFloat(valorIngresado);
        sumaTotal += numero;

        movimientos.push(`Consignación de ${numero} pesos`);
        console.log(`Consignación de ${numero} pesos`);

        const valorTotalMostrado = document.getElementById('valorTotal');

        alert(`El valor ${numero} ha sido consignado con éxito.`);
    } else {
        console.log("Número inválido");
    }
});

const Withdraw = document.getElementById('Withdraw');
Withdraw.addEventListener('click', function() {
    const valorRetirar = prompt("Valor a retirar");

    if (valorRetirar !== null && !isNaN(valorRetirar)) {
        const numeroRetiro = parseFloat(valorRetirar);
        if (numeroRetiro <= sumaTotal) {
            sumaTotal -= numeroRetiro;

            // Registrar el movimiento de retiro
            movimientos.push(`Retiro de ${numeroRetiro} pesos`);
            console.log(`Retiro de ${numeroRetiro} pesos`);

            const valorTotalMostrado = document.getElementById('valorTotal');

            alert(`Usted ha retirado ${numeroRetiro} exitosamente.`);
        } else {
            alert("Saldo insuficiente");
        }
    } else {
        console.log("Datos ingresados no válidos");
    }
});

const Search = document.getElementById('Search');
Search.addEventListener('click', function() {
    alert(`El saldo en su cuenta es ${sumaTotal} Pesos`);
});

const Check_move = document.getElementById('Check_move');
Check_move.addEventListener('click', function() {
    movimientos.forEach(movimiento => {
    });

    let listaMovimientos = "Movimientos:\n";
    movimientos.forEach(movimiento => {
        listaMovimientos += `- ${Check_move}\n`;
    });
    alert(listaMovimientos);
});
