var socket = io('http://localhost:3000');

// Escuchar sucesos.
socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Renato Montufar',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

socket.on('enviarMensaje', function(message) {
    console.log(message);
});