function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const chatMessages = document.getElementById('chat-messages');

  if (messageInput.value.trim() !== '') {
    const newMessage = document.createElement('div');
    newMessage.innerText = messageInput.value;
    newMessage.classList.add('message');
    chatMessages.appendChild(newMessage);

    // Clear the input after sending the message
    messageInput.value = '';
  }
}
