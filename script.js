document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
    const inputBox = document.getElementById('userInput');
    const userMessage = inputBox.value.trim();

    if (userMessage) {
        addMessage(userMessage, 'user');
        inputBox.value = '';

        // シナリオに基づいたボットの応答を処理
        setTimeout(() => {
            const botMessage = getBotResponse(userMessage);
            addMessage(botMessage, 'bot');
        }, 1000);
    }
}

function addMessage(text, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('chat-message');

    const icon = document.createElement('div');
    icon.classList.add(sender === 'bot' ? 'bot-icon' : 'user-icon');

    const message = document.createElement('div');
    message.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    message.textContent = text;

    messageContainer.appendChild(icon);
    messageContainer.appendChild(message);
    chatbox.appendChild(messageContainer);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(userMessage) {
    // 簡単なシナリオ例
    if (userMessage.includes('こんにちは')) {
        return 'こんにちは！今日はどうされましたか？';
    } else if (userMessage.includes('天気')) {
        return '今日の天気は晴れです。';
    } else {
        return 'すみません、よくわかりませんでした。';
    }
}
