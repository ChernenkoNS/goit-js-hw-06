
const buttonRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonRef.addEventListener("click", onBtnColorChange);

function onBtnColorChange() {
bodyRef.style.backgroundColor = getRandomHexColor()
colorRef.textContent = getRandomHexColor()

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
