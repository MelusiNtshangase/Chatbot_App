"use strict";

const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendBtn = document.querySelector(".chat-input span");

let userMsg;
const API_KEY = "";

const createChatLi = (message, className) => {
  // Create <li> element with passed in message + className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);

  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;

  chatLi.innerHTML = chatContent;
  return chatLi;
};

const generateResponse = () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMsg }],
    }),
  };
};

const handleMsg = () => {
  userMsg = chatInput.value.trim();
  if (!userMsg) return;

  //   Append user msg to chatbox
  chatbox.appendChild(createChatLi(userMsg, "outgoing"));

  // Display "Thinking..." of msg of chatbox
  setTimeout(() => {
    chatbox.appendChild(createChatLi("Thinking...", "incoming"));
    generateResponse();
  }, 600);
};

sendBtn.addEventListener("click", handleMsg);
// 22:52
