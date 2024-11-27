
const generateBtn = document.getElementById("generate-btn");
const result = document.getElementById("random-number");

generateBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  result.textContent = `Random Number: ${randomNumber}`;
});