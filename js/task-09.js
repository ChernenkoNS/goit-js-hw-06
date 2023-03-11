
const buttonRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonRef.addEventListener("click", onBtnColorChange);

function onBtnColorChange() {

  const color = getRandomHexColor()

  bodyRef.style.backgroundColor = color
  colorRef.textContent = color
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    
}
