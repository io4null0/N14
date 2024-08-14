const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');

function addMessage(message, isBot) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', isBot ? 'bot' : 'user');
  messageDiv.textContent = message;
  chatContainer.appendChild(messageDiv);
}

// 送信ボタンをクリックした時の処理
document.querySelector('button').addEventListener('click', () => {
  const userMessage = userInput.value;
  addMessage(userMessage, false);
  userInput.value = '';

  // ボットの返信
  const botResponse = 'こんにちは！何かお手伝いできることはありますか？';
  addMessage(botResponse, true);
});
