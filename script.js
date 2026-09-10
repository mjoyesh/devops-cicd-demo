// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Greeting button
const greetBtn = document.getElementById("greet-btn");
const greeting = document.getElementById("greeting");
const messages = [
  "Hello there! 👋",
  "Nice to see you!",
  "Thanks for stopping by.",
  "Happy coding!",
];

greetBtn.addEventListener("click", () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  greeting.textContent = msg;
});

// Counter
let count = 0;
const countEl = document.getElementById("count");

document.getElementById("increment").addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

document.getElementById("decrement").addEventListener("click", () => {
  count -= 1;
  countEl.textContent = count;
});
