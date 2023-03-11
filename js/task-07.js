const inputRef = document.querySelector("#font-size-control")
inputRef.value = "16"
const textRef = document.querySelector("#text")

inputRef.addEventListener ("input", replaceFontSize);

// textRef.style.fontSize = inputRef.value

function replaceFontSize() {
textRef.style.fontSize = inputRef.value + "px";

}