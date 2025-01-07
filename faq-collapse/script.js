const buttons = document.querySelectorAll(".faq-button");

const toggleButton = () => {
  buttons.forEach((btn) =>
    btn.addEventListener("click", () =>
      btn.parentNode.classList.toggle("active")
    )
  );
};

toggleButton();
