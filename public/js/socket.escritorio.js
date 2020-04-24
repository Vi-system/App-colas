(function() {
    addEventListener('load', function() {
        var
            socket = io(),
            numeroEscritorio = document.querySelector('h1'),
            btn = document.querySelector('button'),
            outTicket = document.querySelector('small'),
            searchParams = new URLSearchParams(window.location.search);

        if (!searchParams.has('escritorio')) {
            window.location = 'index.html';
            throw new Error('El escritorio es necesario');
        }

        var escritorio = searchParams.get('escritorio');
        numeroEscritorio.innerHTML = 'Escritorio ' + escritorio;

        btn.addEventListener('click', function() {
            socket.emit('atenderTicket', { escritorio: escritorio }, function(res) {
                if (res === 'No hay tickets') {
                    outTicket.innerHTML = 'No hay tickets';
                    return alert('No hay tickets');
                }
                outTicket.innerHTML = res.numero;
            });
        });
    });
})();