const jokeElement = document.querySelector(".joke");
const buttonElement = document.querySelector("button");

getJokes();
async function getJokes() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming,Spooky,Christmas?blacklistFlags=religious,political,racist,sexist"
    );
    const data = await response.json();
    if (data.type === "single") {
      jokeElement.innerHTML = data.joke;
    } else if (data.type === "twopart") {
      jokeElement.innerHTML = `${data.setup}<br>${data.delivery}`;
    }
  } catch (error) {
    console.error("Failed to load jokes, please try again.");
  }
}

buttonElement.addEventListener("click", () => {
  getJokes();
});
