const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// シナリオデータ（例）
const scenarios = [
  {
    user: 'こんにちは',
    bot: 'こんにちは！ご用件は？',
    icon: 'bot-icon.png'
  },
  // ... その他のシナリオ
];

// メッセージを追加する関数
function addMessage(message, isUser) {
  const li = document.createElement('li');
  li.className = isUser ? 'user-message' : 'bot-message';
  li.innerHTML = `
    <img src="${message.icon}" alt="アイコン">
    <p>${message.text}</p>
  `;
  chatMessages.appendChild(li);
}

// ユーザー入力時の処理
userInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const userMessage = userInput.value;
    addMessage({ text: userMessage, icon: 'user.png' }, true);
    userInput.value = '';

    // シナリオから適切な応答を検索し、addMessageで追加
    // ...
  }
});

// 初期表示
addMessage({ text: 'チャットを始めましょう！', icon: 'bot.png' }, false);
