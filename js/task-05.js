const inputRef = document.getElementById("name-input");
const inputName = document.getElementById("name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
    inputName.textContent = event.currentTarget.value
}