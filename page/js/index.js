document.addEventListener("DOMContentLoaded", function (e) {
    var handle = document.getElementById("handle");
    var massege = document.getElementById('massege');
    var sendBtn = document.getElementById('send');
    var massege_area = document.getElementById('massege-area');
    console.log(handle);
    console.log(massege);
    console.log(sendBtn);
    console.log(massege_area);
});


// make connetion 
var socket = io.connect('http://localhost:3001')
