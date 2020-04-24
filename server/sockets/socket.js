const { TicketControl } = require('../classes/tickets');
const ticketControl = new TicketControl();
module.exports = (IO) => {

    IO.on('connection', socket => {
        socket.on('disconnect', () => {
            console.log('disconnect');
        });
        socket.emit('status', {
            ultimo: ticketControl.ultimo,
            ultimos4: ticketControl.getUltimos4()
        });

        socket.on('atenderTicket', (data, cb) => {
            if (!data.escritorio) {
                cb({
                    err: true,
                    mensaje: 'El numero de escritorio es necesario'
                });
            }

            let atenderTicket = ticketControl.atenderTicket(data.escritorio);
            console.log(ticketControl.ultimos4);
            cb(atenderTicket);

            socket.broadcast.emit('status', {
                ultimos4: ticketControl.getUltimos4()
            });
        });
        socket.on('next-ticket', (data, cb) => {
            ticketControl.siguienteTicket();
            cb({
                ultimo: ticketControl.ultimo
            });
        });
    });
};