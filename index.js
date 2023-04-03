const form = document.querySelector("form");
const emailInput = document.querySelector('#email'); 
const emailError = document.querySelector("#mail + div.error");
 

//Every time we change the value of the input, we check to see if it contains valid data. 
document.addEventListener('input', (event) => {
    inputHandler(); 
})

//If the data is not valid, we run showError() to show the appropriate error.
function showError(inputElement) {

}