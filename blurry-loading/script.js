const background = document.querySelector(".bg-image");
const text = document.querySelector(".bg-text p");
let blurPercentage = 0;
const maxBlur = 20;  
const maxCapacity = 0;

const timerId = setInterval(() => {
  if (blurPercentage < 100) {
    blurPercentage++;

    const blurValue = maxBlur * (1 - (blurPercentage / 100));

    const opacityValue = 1 - (blurPercentage / 100); 

    background.style.filter = `blur(${blurValue}px)`;

    text.style.opacity = opacityValue;

    text.textContent = `${blurPercentage}%`;
  } else {
    clearInterval(timerId);
  }
}, 100);
