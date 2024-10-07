const socket = new WebSocket('ws://localhost:3000');

let messageCount = 0;
const maxMessages = 100; 

function sendMessage() {
    const messageInput = document.getElementById('messageInput2');
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
}

socket.onmessage = function (event) {
    const chatBox = document.getElementById('chatBox2');
    if (messageCount < maxMessages) {
        chatBox.innerHTML += `<div class="message receiver">${event.data}</div>`;
        messageCount++;
    }
};