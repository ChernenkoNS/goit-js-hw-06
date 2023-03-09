
const edecrementBtn = document.querySelector('button[data-action="decrement"]')
const valueRef = document.getElementById("value")
const incrementBtn = document.querySelector('button[data-action="increment"]')

incrementBtn.addEventListener("click", rightBtnClick)

function rightBtnClick(event) {
    event.preventDefault();
    let counteClickBtn = valueRef.textContent;
    valueRef.textContent = parseInt(counteClickBtn) + 1;
    }
    

edecrementBtn.addEventListener("click", leftBtnClick)   

function leftBtnClick(event) {
    event.preventDefault();
    let counteClickBtn = valueRef.textContent;
    valueRef.textContent = parseInt(counteClickBtn) - 1;
    }

    



