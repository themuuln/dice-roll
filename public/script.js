let btn = document.getElementById("mainBtn");
let diceNumber = document.getElementById("dice");
let total = document.querySelectorAll("#number");

// Throwing a dice code

let numberGenerator = (_) =>
  (diceNumber.innerHTML = Math.floor(Math.random() * 6 + 1));

btn.addEventListener("click", () => {
  setInterval(() => {
    (_) => {
      let;
      for (shakeyNumber = 1; shakeyNumber >= 6; shakeyNumber++) {
        // TODO: 1-6 hoorond toonii shuffle effect (1 secondiin tursh 60-100ms dawtamjtai)
      }
    };
  }, 100);

  // Generating number animation
  setTimeout(() => {
    numberGenerator();
  }, 1000);

  // Button cooldown effect

  btn.style.pointerEvents = "none";
  btn.style.backgroundColor = "#131b25";
  btn.style.borderColor = "#9d3839";
  setTimeout(() => {
    // btn.style.cursor = "default";
    btn.style.pointerEvents = "all";
    btn.style.backgroundColor = "#2D4059";
    btn.style.borderColor = "#EA5455";
  }, 1000);

  // Button on click

  if (typeof NaN === "number") {
    btn.style.transform = "scale(1.4)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
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
