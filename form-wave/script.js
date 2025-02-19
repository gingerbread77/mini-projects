const inputs = document.querySelectorAll('input');

// add animation to label
function animateLabel(label) {
  // split the text into letters
  const text = label.innerText.split('');
  label.innerHTML = ''; 

  text.forEach((letter, index) => {
    // create a span element (single letter)
    const span = document.createElement('span');
    span.innerText = letter;
    span.style.animationDelay = `${index * 0.1}s`;
    label.appendChild(span); 
  });
}

inputs.forEach(input => {
  const label = document.querySelector(`label[for="${input.id}"]`);
  
  input.addEventListener('focus', () => {
    if (label) {
      label.style.color = 'lightblue';
      // Remove blur animation if focus
      label.classList.remove('blur'); 
      animateLabel(label);
    }
  });

  input.addEventListener('blur', () => {
    if (label) {
      label.style.color = '#fff';
      // Add blur animation when input loses focus
      label.classList.add('blur');  
      animateLabel(label);  
    }
  });
});
