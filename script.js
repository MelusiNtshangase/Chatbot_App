"use strict";

const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendBtn = document.querySelector(".chat-input span");

let userMsg;

const createChatLi = (message, className) => {
  // Create <li> element with passed in message + className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);

  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span class="material-symbols-outlined">smart_toy</span>`;

  chatLi.innerHTML = chatContent;
  return chatLi;
};

const handleMsg = () => {
  userMsg = chatInput.value.trim();
  if (!userMsg) return;

  //   Append user msg to chatbox
  chatbox.appendChild(createChatLi(userMsg, "outgoing"));
};

sendBtn.addEventListener("click", handleMsg);
