// Code Quiz JS

var startButton = document.querySelector("#start");
var timerEl = document.querySelector('.timer');
var questionsEl = document.querySelector('.questions');
var quizEl = document.querySelector('.quiz');
var questionDisplayEl = document.querySelector('.question-display');
var questionTextEl = document.querySelector('#question-text');
var answersEl = document.querySelector('.answers');
var countdown = 100;

var allQuestions = ['What is JavaScript?', 'What is not a JavaScript Data Type?', 'Which is not a looping structure in JavaScript?', 'Whats an undefined value in JavaScript?', 'What type of popup boxes are in JavaScript?', 'Is the data type of variables in Javascript object data types?', 'Does JavaScript have concept level scope?', 'What year did JavaScript make an appearance?', 'What are JavaScript cookies?']

var possibleAnswers = [
    ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'],
    ['Object', 'Defined', 'Number', 'String'],
    ['If', 'For', 'While', 'Do-while'],
    ['Computable', 'Variable not assigned to a value', 'Property exists', 'A plegmen variable'],
    ['Red Alert', 'Avid', 'Short', 'Prompt'],
    ['True', 'False', 'Never', 'Ever'],
    ['Yes', 'No', 'Maybe', 'So'],
    ['1990', '2010', '1970', '1995'],
    ['Yes', 'No', 'Sometimes', 'Depends on the case'],
    ['Yummy', 'Bugs', 'Large storage files', 'Small test files']
]

var correctAnswers = ['A programming language', 'Defined', 'If', 'Variable not assigned to a value', 'Prompt', 'True', 'No', '1995', 'Yes', 'Small test files']

function setTimer() {
    var timerTotal = setInterval(function () {
        countdown--;
        timerEl.textContent = countdown;

        if (countdown === 0) {
            clearInterval(timerTotal);
            questionsEl.textContent = 'Game Over';
            questionTextEl.textContent = 'Thanks for playing! Try again :)';
            answersEl.textContent = '';
        }
    }, 1000);
}

function hideButton() {
    startButton.style.display = "none";
    quizEl.style.display = "none";
    questionDisplayEl.style.display = "inline";
}





// var answerButtons = document.querySelector(".question-display")
// answerButtons.addEventListener("click", function () {
//     console.log(e.target)
//     answerButtons.textContent = "Hello"
// })






startButton.addEventListener('click', setTimer);
startButton.addEventListener('click', hideButton);















    // .textContent

// function startGame() {


// // } */





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