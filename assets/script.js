// Code Quiz JS

var startButton = document.querySelector("#start");
var timerEl = document.querySelector('.timer');
var questionsEl = document.querySelector('.questions');
var quizEl = document.querySelector('.quiz');
var questionDisplayEl = document.querySelector('.question-display');
var questionTextEl = document.querySelector('#question-text');
var answersEl = document.querySelector('.answers');
var countdown = 100;
var score = 0;
var answerOne = document.querySelector('#answer-1');
var answerTwo = document.querySelector('#answer-2');
var answerThree = document.querySelector('#answer-3');
var answerFour = document.querySelector('#answer-4');

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

for (let i = 0; i < allQuestions.length; i++) {
    function showQuestions() {
        questionTextEl.textContent = allQuestions[0];
    }
}

for (let p = 0; p < possibleAnswers.length; p++) {
    function showAnswers() {
        answerOne.textContent = possibleAnswers[0][0];
        answerTwo.textContent = possibleAnswers[0][1];
        answerThree.textContent = possibleAnswers[0][2];
        answerFour.textContent = possibleAnswers[0][3];
    };
}

answerFour.onclick = function questionTwo() {
    score++;
    console.log('score:', score)

    questionTextEl.textContent = allQuestions[1];

    answerOne.textContent = possibleAnswers[1][0];
    answerTwo.textContent = possibleAnswers[1][1];
    answerThree.textContent = possibleAnswers[1][2];
    answerFour.textContent = possibleAnswers[1][3];

    answerFour.onclick = function questionThree() {
        score++;
        console.log('score:', score)

        questionTextEl.textContent = allQuestions[2];

        answerOne.textContent = possibleAnswers[2][0];
        answerTwo.textContent = possibleAnswers[2][1];
        answerThree.textContent = possibleAnswers[2][2];
        answerFour.textContent = possibleAnswers[2][3];

        answerFour.onclick = function questionFour() {
            score++;
            console.log('score:', score)

            questionTextEl.textContent = allQuestions[3];

            answerOne.textContent = possibleAnswers[3][0];
            answerTwo.textContent = possibleAnswers[3][1];
            answerThree.textContent = possibleAnswers[3][2];
            answerFour.textContent = possibleAnswers[3][3];

            answerFour.onclick = function questionFive() {
                score++;
                console.log('score:', score)

                questionTextEl.textContent = allQuestions[4];

                answerOne.textContent = possibleAnswers[4][0];
                answerTwo.textContent = possibleAnswers[4][1];
                answerThree.textContent = possibleAnswers[4][2];
                answerFour.textContent = possibleAnswers[4][3];

                answerFour.onclick = function questionSix() {
                    score++;
                    console.log('score:', score)

                    questionTextEl.textContent = allQuestions[5];

                    answerOne.textContent = possibleAnswers[5][0];
                    answerTwo.textContent = possibleAnswers[5][1];
                    answerThree.textContent = possibleAnswers[5][2];
                    answerFour.textContent = possibleAnswers[5][3];

                    answerFour.onclick = function questionSeven() {
                        score++;
                        console.log('score:', score)

                        questionTextEl.textContent = allQuestions[6];

                        answerOne.textContent = possibleAnswers[6][0];
                        answerTwo.textContent = possibleAnswers[6][1];
                        answerThree.textContent = possibleAnswers[6][2];
                        answerFour.textContent = possibleAnswers[6][3];

                        answerFour.onclick = function questionEight() {
                            score++;
                            console.log('score:', score)

                            questionTextEl.textContent = allQuestions[7];

                            answerOne.textContent = possibleAnswers[7][0];
                            answerTwo.textContent = possibleAnswers[7][1];
                            answerThree.textContent = possibleAnswers[7][2];
                            answerFour.textContent = possibleAnswers[7][3];

                            answerFour.onclick = function questionNine() {
                                score++;
                                console.log('score:', score)

                                questionTextEl.textContent = allQuestions[8];

                                answerOne.textContent = possibleAnswers[8][0];
                                answerTwo.textContent = possibleAnswers[8][1];
                                answerThree.textContent = possibleAnswers[8][2];
                                answerFour.textContent = possibleAnswers[8][3];

                                answerFour.onclick = function questionTen() {
                                    score++;
                                    console.log('score:', score)

                                    questionTextEl.textContent = allQuestions[9];

                                    answerOne.textContent = possibleAnswers[9][0];
                                    answerTwo.textContent = possibleAnswers[9][1];
                                    answerThree.textContent = possibleAnswers[9][2];
                                    answerFour.textContent = possibleAnswers[9][3];

                                    answerFour.onclick = function leaderboard() {
                                        score++;
                                        console.log('score:', score)

                                        questionTextEl.textContent = "Leaderboard";

                                        answerOne.textContent = "1st Place: JMW";
                                        answerTwo.textContent = "2nd Place: ROK";
                                        answerThree.textContent = "3rd Place: CIA";
                                        answerFour.textContent = "4th Place: LOL";

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}






// leaderBoard();

// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
//     var email = localStorage.getItem("email");
//     var password = localStorage.getItem("password");

//     if (!email || !password) {
//         return;
//     }

//     userEmailSpan.textContent = email;
//     userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;

//     if (email === "") {
//         displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//         displayMessage("error", "Password cannot be blank");
//     } else {
//         displayMessage("success", "Registered successfully");

//         localStorage.setItem("email", email);
//         localStorage.setItem("password", password);
//         renderLastRegistered();
//     }
// });






startButton.addEventListener('click', setTimer);
startButton.addEventListener('click', hideButton);
startButton.addEventListener('click', showQuestions);
startButton.addEventListener('click', showAnswers);



