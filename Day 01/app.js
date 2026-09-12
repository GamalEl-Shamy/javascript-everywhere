const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");
const consoleBtn = document.getElementById("consoleBtn");

changeBtn.addEventListener("click", () => {
  message.innerHTML = "another text";
});

consoleBtn.addEventListener("click", () => {
  console.log("Hellooooo");
});