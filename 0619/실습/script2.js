

const addToChatBtn = document.querySelector(".add-to-chat-list");
const chatList = document.querySelector(".chat-list");

//console.log(addToChatList);

function addToChat(user, context) {
  const chatLine = document.createElement("p");
  chatLine.innerHTML = `<b>${user}: </b> ${context}`
  chatList.appendChild(chatLine);
}


addToChatBtn.addEventListener("click", function(){
  const userInput = document.getElementById("user").value
  const textInput = document.getElementById("message").value
  
  addToChat(userInput, textInput);
});

// userInput, textInput의 value값 리셋 시키고 싶은데 안됨.