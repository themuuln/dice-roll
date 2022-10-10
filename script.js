let btn = document.getElementById("mainBtn");
let diceNumber = document.getElementById("dice");
let total = document.querySelectorAll("#number");

// Throwing a dice code

let randomNumberGenerator = () => {
  diceNumber.innerText = Math.floor(Math.random() * 6 + 1);
};

let storetotal = () => {
  total.innerText = "test";
};

btn.addEventListener("click", () => {
  randomNumberGenerator();
  shakeEnabler();

  // Button on click animation

  let clicked = false;
  if (clicked == false) {
    btn.style.transform = "scale(1.2)";
    diceNumber.transform = "scale(1.1)";
    clicked = true;
    setTimeout(() => {
      btn.style.transform = "scale(1)";
      diceNumber.transform = "scale(1)";
    }, 100);
  }
});

// Dice Animation

let shakeEnabler = () => {
  let timerId = null;
  let trans = 0;

  timerId = setInterval(frame, 0.1);

  function frame() {
    if (trans == 360) {
      clearInterval(timerId);
    } else {
      trans++;
      // not working properly lol
      // diceNumber.style.transform = "translate(" + trans + "px)";
    }
  }
};
