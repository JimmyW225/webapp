const numberDisplay = document.getElementById('myNumber');
const changeButton = document.getElementById('changeButton');


let currentNumber = 1;

function updateNumber() {
    // Increment the number (or apply other logic)
    currentNumber=currentNumber * 2; 
    
    // Update the display on the webpage
    numberDisplay.textContent = currentNumber; 
}

changeButton.addEventListener('click', updateNumber);

