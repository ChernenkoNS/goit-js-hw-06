const inputRef = document.querySelector("#validation-input")
const validValue = document.querySelector('input[data-length="6"]')

inputRef.addEventListener ("blur", checkInputValue) ;

function checkInputValue () {
    if(inputRef.value.length !== Number(validValue.dataset.length)) {
        inputRef.classList.add("invalid")

    }else{ 
        inputRef.classList.replace('invalid', 'valid')
    }
}

