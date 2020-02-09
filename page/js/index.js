// make connetion 
var socket = io.connect('http://localhost:3001');

var handle = document.getElementById("handle"),
    message = document.getElementById('message'),
    sendBtn = document.getElementById('send'),
    message_area = document.getElementById('message-area');

// Emit events
sendBtn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
});


// listen for events
socket.on('chat', function (data) {
    message_area.innerHTML += "<p><strong>" + data.handle + " : </strong>" + data.message + "</p>"
})