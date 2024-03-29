const btn = document.getElementById("mainBtn");
const diceNumber = document.getElementById("dice");
const total = document.querySelectorAll("#number");
const diceSound = new Audio("../sound/dice_sound.mp3");
const gif = document.querySelector(".soundOn");

// Main function
const numberGenerator = (_) =>
  (diceNumber.innerHTML = Math.floor(Math.random() * 6 + 1));

btn.addEventListener("click", () => {
  // Roll onclick hide annoying GIF
  gif.style.visibility = "hidden";
  gif.style.opacity = "0";

  // Sound Effect On
  diceSound.cloneNode(true).play();

  // Generating number animation
  setTimeout(() => {
    numberGenerator();
  }, 1000);

  // Button cooldown effect

  btn.style.pointerEvents = "none";
  btn.style.backgroundColor = "var(--main)";
  btn.style.borderColor = "var(--dark)";
  btn.style.color = "var(--lightcyan)";
  setTimeout(() => {
    btn.style.pointerEvents = "all";
    btn.style.backgroundColor = "var(--lightcyan)";
    btn.style.borderColor = "var(--background)";
    btn.style.color = "var(--main)";
  }, 1000);

  // Button on click animation

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

  // ! Slot Machine Effect !

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
  // TODO: Casino Slot Machine animation ...
  //   }
  // };

  // Slot Machine Effect

  // setInterval(() => {
  //   (_) => {
  //     let;
  //     for (shakeyNumber = 1; shakeyNumber >= 6; shakeyNumber++) {
  //       // TODO: 1-6 hoorond toonii shuffle effect (1 secondiin tursh 60-100ms dawtamjtai)
  //     }
  //   };
  // }, 100);
});
