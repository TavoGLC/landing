//Mouse over buttons changes background to full colors
function mouseOver() {
  let targetDiv = document.querySelector(".intro");
  targetDiv.style.filter = "grayscale(0)";
}
//Mouse over buttons changes background to gray scale
function mouseOut() {
  let targetDiv = document.querySelector(".intro");
  targetDiv.style.filter = "grayscale(1)";
}

//init on DOM load
document.addEventListener("DOMContentLoaded", init);

function init() {
  buttonElement = document.querySelector(".buttons");
  buttonElement.addEventListener("mouseover", mouseOver);
  buttonElement.addEventListener("mouseout", mouseOut);
}
