// make connetion 
var socket = io.connect('http://localhost:3001');

var handle = document.getElementById("handle"),
    message = document.getElementById('message'),
    sendBtn = document.getElementById('send'),
    message_area = document.getElementById('message-area'),
    feedback = document.getElementById('feedback');

// Emit events
sendBtn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});


// listen for events
socket.on('chat', function (data) {
    feedback.innerHTML = "";
    message_area.innerHTML += "<p><strong>" + data.handle + " : </strong>" + data.message + "</p>"
});

message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value);
});

socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>' + data + " is typing  ..." + "</em></p>";
});