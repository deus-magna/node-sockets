const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        message: 'Bienvenido'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (message.usuario) {
        //     callback({
        //         respuesta: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Algo salio mal'
        //     });
        // }


    });
});