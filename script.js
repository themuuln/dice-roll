let btn = document.getElementById("mainBtn");
let diceNumber = document.getElementById("dice");

btn.addEventListener("click", () => {
  randomNumberGenerator();
  shakeEnabler();
});

let randomNumberGenerator = () => {
  diceNumber.innerText = Math.floor(Math.random() * 6 + 1);
};

let shakeEnabler = () => {
  let timerId = null;
  let rot = 0;

  timerId = setInterval(frame, 0.1);

  function frame() {
    if (rot == 180) {
      clearInterval(timerId);
    } else {
      rot++;
      diceNumber.style.transform = "rotate(" + rot + "deg)";
    }
  }
};
