let btn = document.getElementById("mainBtn");
let diceNumber = document.getElementById("dice");
let total = document.querySelectorAll("#number");

// Throwing a dice code

let numberGenerator = (_) =>
  (diceNumber.innerHTML = Math.floor(Math.random() * 6 + 1));

let storetotal = () => {
  total.innerText = "test";
};

btn.addEventListener("click", () => {
  numberGenerator();
  shakeEnabler();

  // Button cooldown

  setTimeout(() => {}, 1000);

  // Button on click animation

  if (typeof NaN === "number") {
    btn.style.transform = "scale(1.2)";
    diceNumber.transform = "scale(1.1)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
      diceNumber.transform = "scale(1)";
    }, 100);
  }

  // Shake animation
  diceNumber.style.animation = "shake .01s linear infinite";
  setTimeout(() => {
    diceNumber.style.animationPlayState = "paused";
  }, 1000);
});

// ! Bin

// Dice Shaking Animation
// Unnecessary for now

// let shakeEnabler = () => {
//   let timerId = null;
//   let trans = 0;

//   timerId = setInterval(frame, 0.1);

//   function frame() {
//     if (trans == 360) {
//       clearInterval(timerId);
//     } else {
//       trans++;
// not working properly lol
// diceNumber.style.transform = "translate(" + trans + "px)";
//     }
//   }
// };
