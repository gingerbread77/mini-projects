const counters = document.querySelectorAll(".counter-size");

const updateCounter = (counter, target, duration) => {
  let counterValue = 0;

  const increment = target / (duration / 5);


  const incrementCounter = () => {
    if (counterValue < target) {
      counterValue += increment;
      counter.textContent = Math.floor(counterValue);
      setTimeout(incrementCounter, 5);
    } else {
      counter.textContent = target;
    }
  }
  incrementCounter();
};

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const duration = 1000;
  updateCounter(counter, target, duration);
})
