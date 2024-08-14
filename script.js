const scenarios = {
    start: "こんにちは！何をお手伝いしましょうか？",
    help: "どんなサポートが必要ですか？",
    end

let currentStep = "start";

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;
    
    addMessage("user", userInput);
    document.getElementById("user-input").value = "";

    if (currentStep === "start") {
        if (userInput.includes("助けて")) {
            currentStep = "help";
            addMessage("bot", scenarios.help);
        } else {
            currentStep = "end";
            addMessage("bot", scenarios.end);
        }
    }
}

function addMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);

    const img = document.createElement("img");
    img.src = sender === "bot" ? "bot-icon.png" : "user-icon.png";

    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    textDiv.textContent = text;

    messageDiv.appendChild(img);
    messageDiv.appendChild(textDiv);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}
