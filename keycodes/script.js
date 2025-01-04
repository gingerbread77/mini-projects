const container = document.querySelector(".container");

function getKeyData(e) {
  return [
    { label: "event.key", value: e.key === " " ? "Space" : e.key },
    { label: "event.keyCode", value: e.keyCode },
    { label: "event.code", value: e.code },
  ];
}

// display the information of the key pressed
function updatePage(keyData) {
  keyData.forEach((data) => {
    const key = document.createElement("div");
    const text = document.createElement("p");
    const box = document.createElement("div");

    key.classList.add("key");
    box.classList.add("box");

    text.innerHTML = data.label;
    box.innerHTML = data.value;
    box.style.backgroundColor = "#f1efef";
    key.appendChild(text);
    key.appendChild(box);
    container.appendChild(key);
  });
}

window.addEventListener("keydown", (e) => {
  const keyData = getKeyData(e);
  // clear the container
  container.innerHTML = "";
  updatePage(keyData);
});
