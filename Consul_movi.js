let sumaTotal = 0;
const movimientos = [];

const Send = document.getElementById('Send');
Send.addEventListener('click', function() {
    const valorIngresado = prompt("Digite saldo a consignar");

    if (valorIngresado !== null && !isNaN(valorIngresado)) {
        const numero = parseFloat(valorIngresado);
        sumaTotal += numero;

        movimientos.push(`Consignación de ${numero} pesos`);
        console.log(`Consignación de ${numero} pesos`);

        const valorTotalMostrado = document.getElementById('valorTotal');
        valorTotalMostrado.textContent = sumaTotal; // Update the displayed total value in the HTML

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

            movimientos.push(`Retiro de ${numeroRetiro} pesos`);
            console.log(`Retiro de ${numeroRetiro} pesos`);

            const valorTotalMostrado = document.getElementById('valorTotal');
            valorTotalMostrado.textContent = sumaTotal; // Update the displayed total value in the HTML

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
    let listaMovimientos = "Movimientos:\n";
    movimientos.forEach(movimiento => {
        listaMovimientos += `- ${movimiento}\n`; // Fixed typo, 'Check_move' should be 'movimiento'
    });
    alert(listaMovimientos);
});


const Exit = document.getElementById('Exit');

Exit.addEventListener('click', function() {

    window.location.href = '../index.html';
});

const Change = document.getElementById('Change');

Change.addEventListener('click', function() {

    window.location.href = '../Change_Pass.html';
});





