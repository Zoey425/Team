const greetingForm = document.getElementById("greeting-form");
const greetingInput = document.querySelector("#greeting-form input[type=text]");

const greetingBtn = document.querySelector("#greeting-form input[type=submit]");
const greeting = document.getElementById("greeting");

function handleGreeting(event) {
  event.preventDefault();
  greetingForm.style.display = "none";
  const userName = greetingInput.value;
  greeting.innerText = `안녕하세요 ${userName}님`;
  
}

greetingBtn.addEventListener("click", handleGreeting);