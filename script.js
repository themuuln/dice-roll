let btn = document.getElementById("mainBtn");
let diceNumber = document.getElementById("dice");

btn.addEventListener("click", () => {
  randomNumberGenerator();
});

let randomNumberGenerator = () => {
  diceNumber.innerText = Math.floor(Math.random() * 6 + 1);
};

let shakeEnabler = () => {
  let pos = 0;
  let id = setInterval(frame, 10);
  let frame = () => {
    if (pos == 50) {
      clearInterval(id);
    } else {
      pos++;
      btn.style.transform = ``
    }
  }
};
