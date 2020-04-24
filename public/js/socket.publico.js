(function() {
    addEventListener('load', function() {
        var
            socket = io(),
            lblTicket1 = document.getElementById('lblTicket1'),
            lblTicket2 = document.getElementById('lblTicket2'),
            lblTicket3 = document.getElementById('lblTicket3'),
            lblTicket4 = document.getElementById('lblTicket4'),
            lblEscritorio1 = document.getElementById('lblEscritorio1'),
            lblEscritorio2 = document.getElementById('lblEscritorio2'),
            lblEscritorio3 = document.getElementById('lblEscritorio3'),
            lblEscritorio4 = document.getElementById('lblEscritorio4'),
            lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4],
            lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

        socket.on('status', function(data) {
            let audio = new Audio('audio/new-ticket.mp3');
            audio.play();
            actualizarPantalla(data.ultimos4);
        });

        function actualizarPantalla(ultimos4) {
            for (var i = 0; i < ultimos4.length; i++) {
                lblEscritorios[i].innerHTML = 'Escritorio ' + ultimos4[i].escritorio;
                lblTickets[i].innerHTML = 'Ticket ' + ultimos4[i].numero;
            }
        }
    });
})();