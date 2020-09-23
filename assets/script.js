// Code Quiz JS

var startButton = document.querySelector("#start");
var timerEl = document.querySelector('.timer');
var countdown = 100;

// var allQuestions = [

// ]
// var allAnswers = [

// ]

function setTimer() {
    var timerTotal = setInterval(function () {
        countdown--;
        timerEl.textContent = countdown;

        if (countdown === 0) {
            clearInterval(timerTotal);
            // sendMessage();
        }
    }, 1000);
}

// function sendMessage() {
//     timeEl.textContent = " ";

//     var imgEl = document.createElement("img");

//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);

// }

setTimer();

// function gameOver() {
//     timerEl.textContent = ' ';

// }

// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             sendMessage();
//         }

//     }, 1000);
// }

// function sendMessage() {
//     timeEl.textContent = " ";

//     var imgEl = document.createElement("img");

//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);

// }



/* <div class="question-display hide">
    <h1 id="question-text">Question Text</h1>
    <div class="answers">
        <h3 id="a-0">Possible Answer 1</h3>
        <h3 id="a-1">Possible Answer 1</h3>
        <h3 id="a-2">Possible Answer 1</h3>
        <h3 id="a-3">Possible Answer 1</h3>
    </div>
</div>


var answerButtons = document.querySelector(".question-display")
answerButtons.addEventListener("click", function (e) {
    console.log(e.target)
})


    .textContent

function startGame() {


// } */





// startButton.addEventListener("click", "start");







// Tips:

// Start with a 1 question game



// // Password Generator JS

// // Linking JS to HTML
// var generateBtn = document.querySelector("#generate");

// // Variables to generate password characters from
// var specialSymbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~", "]"];

// var numberSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// var lowerSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var upperSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// // Function to collect the desired password length of 8 to 128 characters
// function generatePassword() {
//     var characters = prompt('How many characters would you like in your password?');

//     if (characters < 8 || characters > 128) {
//         alert('Password length must be between 8 and 128 characters');
//         generatePassword();
//     }

//     // Variables & alerts to collect user's desired character password preference
//     var special = confirm('Click OK if you would like special characters in your password.');
//     var numbers = confirm('Click OK if you would like numbers in your password.');
//     var lowercase = confirm('Click OK if you would like lowercase characters in your password.');
//     var uppercase = confirm('Click OK if you would like uppercase characters in your password.');

//     // If statement to make it so user has to choose at least one character type
//     if (!special && !numbers && !lowercase && !uppercase) {
//         alert('Please confirm at least one character type.');
//         generatePassword();
//     }

//     // Created a blank array to feed the selected characters into
//     var passwordCharacters = [];

//     // If statements that add selected character type arrays and concats them into the passwordCharacters array
//     if (special) {
//         passwordCharacters = passwordCharacters.concat(specialSymbols)
//     };

//     if (numbers) {
//         passwordCharacters = passwordCharacters.concat(numberSymbols)
//     };

//     if (lowercase) {
//         passwordCharacters = passwordCharacters.concat(lowerSymbols)
//     };

//     if (uppercase) {
//         passwordCharacters = passwordCharacters.concat(upperSymbols)
//     };

//     // Created a variable that the random characters from the passwordCharacters array will feed into
//     var generatedPassword = ""

//     for (let i = 0; i < characters; i++) {
//         // Generates random number between 0 and array length minus 1
//         var randomNum = Math.floor(Math.random() * passwordCharacters.length);
//         // Selects random password from the PasswordCharacters array and concats to generatedPassword
//         generatedPassword += passwordCharacters[randomNum];
//     }
//     // Removes the first four elements of the array and makes sure that all arrays are in the password
//     return generatedPassword;
// }

// // A function that writes the password to the password html card
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
// }

// // Adds event listener that writes password when all functions are complete
// generateBtn.addEventListener("click", writePassword);