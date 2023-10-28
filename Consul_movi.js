document.addEventListener('DOMContentLoaded', function () {
    const consul_movi = document.getElementById('consul_movi');

    consul_movi.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos
        const Withdraw = document.getElementById('Withdraw').value;
        const Search = document.getElementById('Search').value;
        const Send = document.getElementById('Send').value;
        const Change = document.getElementById('Change').value;
        const Check_move = document.getElementById('Check_move').value;
        const Exit = document.getElementById('Exit').value;

        // Realizar validación básica
        if (Withdraw === '' || Search === '' || Send === '' || Change === '' || Check_move === '' || Exit === '') {
            console.log('Por favor complete todos los campos.');
            return; // Detener el proceso si algún campo está vacío
        }

        // Realizar alguna acción con los valores capturados
        console.log('Valores capturados:');
        console.log('Withdraw:', Withdraw);
        console.log('Search:', Search);
        console.log('Send:', Send);
        console.log('Change:', Change);
        console.log('Check_move:', Check_move);
        console.log('Exit:', Exit);

        // Aquí podrías enviar los datos a través de una solicitud AJAX, procesarlos, etc.
        // Por ejemplo, puedes realizar una petición fetch para enviar los datos a un servidor.
        // fetch('url_del_servidor', {
        //     method: 'POST',
        //     body: JSON.stringify({ Withdraw, Search, Send, Change, Check_move, Exit }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Respuesta del servidor:', data);
        // })
        // .catch(error => {
        //     console.error('Error al enviar los datos:', error);
        // });
    });
});