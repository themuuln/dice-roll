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
    if (rot == 360) {
      clearInterval(timerId);
    } else {
      rot++;
      diceNumber.style.transform = "translate(" + rot + "deg)";
    }
  }
};

// let clicked = false;
// btn.addEventListener("click", () => {
//   if (clicked == false) {
//     btn.style.transform = "scale(1.1)";
//     clicked = true;
//   } else {
//     btn.style.transform = "scale(1)";
//   }
// });
btn.addEventListener("click", () => {
  let clicked = false;
  if (clicked == false) {
    btn.style.transform = "scale(1.2)";
    clicked = true;
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 200);
  }
});
