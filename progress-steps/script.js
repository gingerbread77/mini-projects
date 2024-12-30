const btns = document.querySelectorAll(".btn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const steps = document.querySelectorAll(".step");
const progress = document.getElementById("progress");
let stepNumber = 1;

function update() {
  steps.forEach((step, index) => {
    if (index < stepNumber) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  // Update progress bar width

  /* 
  - At step 1, the width is 0%, therefore for 4 steps there are actually 3 intervals (steps.length - 1).
  - At step 2, we've completed only 1 interval, so stepNumber also needs to be reduced by 1, and so forth.
*/

  const progressWidth = ((stepNumber - 1) / (steps.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  // change button state
  if (stepNumber >= 4) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }

  if (stepNumber <= 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // change button color
  btns.forEach((btn) => {
    btn.style.backgroundColor =
      btn.disabled === true ? "lightgray" : "rgb(84, 169, 222)";
  });
}

nextBtn.addEventListener("click", () => {
  if (stepNumber < steps.length) {
    stepNumber++;
  }
  update();
});

prevBtn.addEventListener("click", () => {
  if (stepNumber > 1) {
    stepNumber--;
  }
  update();
});
