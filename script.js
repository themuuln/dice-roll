let btn = document.getElementById("mainBtn");
let diceNumber = document.getElementById("dice");

btn.addEventListener("click", () => {
  diceNumber.innerText = Math.floor(Math.random() * 6 + 1);
});
