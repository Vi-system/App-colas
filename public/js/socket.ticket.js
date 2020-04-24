(function() {
    addEventListener('load', function() {
        var
            socket = io(),
            btn = document.getElementById('nuevoTicket'),
            outTicket = document.getElementById('lblNuevoTicket');

        socket.on('connect', function() {
            console.log('online');
        });

        socket.on('status', function(data) {
            outTicket.textContent = `Ticket: ${data.ultimo}`;
        });

        btn.addEventListener('click', function() {
            socket.emit('next-ticket', null, function(data) {
                outTicket.textContent = `Ticket: ${data.ultimo}`;
            });
        });

        socket.on('disconnect', function() {
            console.log('offline');
        });


    });
})();