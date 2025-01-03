const boxes = document.querySelectorAll(".box");

function toggleVisibilityOnScroll(box){
  // get the distance from the top of the box to the top of the viewport
  const boxTop = box.getBoundingClientRect().top;
  // get the height of the box (including margin)
  const boxHeight = box.offsetHeight;
  const scrollDistance = boxTop + boxHeight;

  if (scrollDistance <= window.innerHeight) {
    box.classList.add("show");
  } else {
    box.classList.remove("show");
  }
}

function handleScroll(){
  boxes.forEach(toggleVisibilityOnScroll)
}

window.addEventListener("scroll", handleScroll);
