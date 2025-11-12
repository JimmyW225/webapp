const numberDisplay = document.getElementById('myNumber');
const changeButton = document.getElementById('changeButton');
const highScoreDisplay = document.getElementById('highScoreDisplay');

let currentNumber1 = 1;
let currentNumber2 = 1;

function updateNumber() {
    // Increment the number (or apply other logic)
    currentNumber1=currentNumber1 * 2; 
    
    // Update the display on the webpage
    numberDisplay.textContent = currentNumber1; 
}

changeButton.addEventListener('click', updateNumber);
changeButton.addEventListener('click', checkHighScore);


const myButton = document.getElementById('changeButton');
myButton.addEventListener('click', function() {
const randomNumber = Math.random();

    // Define the failure threshold (e.g., 0.3 for a 30% chance of failure)
    const failureThreshold = 0.05;

    // Check if the random number is below the failure threshold
    if (randomNumber < failureThreshold) {
        currentNumber1=.5
    } else {
        //success
    }
});

 
function checkHighScore() {
    
    if (currentNumber1 > currentNumber2) {
    currentNumber2 = currentNumber1;
  }
  
  highScoreDisplay.textContent = currentNumber2;
 
}
