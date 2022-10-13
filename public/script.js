let btn = document.getElementById("mainBtn");
let diceNumber = document.getElementById("dice");
let total = document.querySelectorAll("#number");
const diceSound = new Audio("../sound/dice_sound.mp3");

// Throwing a dice code

let numberGenerator = (_) =>
  (diceNumber.innerHTML = Math.floor(Math.random() * 6 + 1));

btn.addEventListener("click", () => {
  // setInterval(() => {
  //   (_) => {
  //     let;
  //     for (shakeyNumber = 1; shakeyNumber >= 6; shakeyNumber++) {
  //       // TODO: 1-6 hoorond toonii shuffle effect (1 secondiin tursh 60-100ms dawtamjtai)
  //     }
  //   };
  // }, 100);
  diceSound.cloneNode(true).play();

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

  // Slot Numbers Effect

  // const slotNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // const displayNumber = document.querySelector("#dice").innerHTML;

  // let init = (firstInit = true, groups = 1, duration = 1) => {
  //   for (const displayNumber of displayNumbers) {
  //     if (firstInit) {
  //       displayNumber.dataset.spinned = "0";
  //     } else if (door.dataset.spinned === "1") {
  //       return;
  //     }

  //     const boxes =
  //     // TODO: Casino Slot Machine animation ...
  //   }
  // };
});

// ! Bin

// Dice Shaking Animation made by DOM
// ! Not Working lol

// let shakeEnabler = () => {
//   let timerId = null;
//   let trans = 0;

//   timerId = setInterval(frame, 0.1);

//   function frame() {
//     if (trans == 360) {
//       clearInterval(timerId);
//     } else {
//       trans++;
// not working properly
// diceNumber.style.transform = "translate(" + trans + "px)";
//     }
//   }
// };
