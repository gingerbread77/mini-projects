const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    cards.forEach((card) => card.classList.remove("active"));
    e.target.classList.add("active");
  });
});
