const textArea = document.querySelector("textarea");
const choicesEle = document.querySelector(".choices");

textArea.value = "";

function updateChoices() {
  textArea.addEventListener("keyup", (e) => {
    const input = e.target.value;

    choicesEle.textContent = "";
    const choiceArr = input
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    for (let i = 0; i < choiceArr.length; i++) {
      const div = document.createElement("div");
      div.className = "choice";

      div.textContent = choiceArr[i];
      choicesEle.appendChild(div);
    }
  });
}

function getRandomChoice() {
  const allChoices = document.querySelectorAll(".choice");
  return allChoices[Math.floor(Math.random() * allChoices.length)];
}

function addHighlight(choice) {
  choice.classList.add("highlight");
}

function removeHighlight() {
  document
    .querySelectorAll(".choice")
    .forEach((choice) => choice.classList.remove("highlight"));
}

function startRoulette() {
  const totalChoices = document.querySelectorAll(".choice").length;

  if (totalChoices === 0) return;

  const INTERVAL = 100;
  const MINLOOPS = 3;
  const totalDuration = INTERVAL * MINLOOPS * totalChoices;

  const intervalId = setInterval(() => {
    const randomChoice = getRandomChoice();
    if (randomChoice) {
      removeHighlight();

      addHighlight(randomChoice);
    }
  }, INTERVAL);

  setTimeout(() => {
    clearInterval(intervalId);
  }, totalDuration);
}

updateChoices();

textArea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    textArea.value = "";
    startRoulette();
  }
});
