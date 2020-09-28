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
        questionTextEl.textContent = allQuestions[i];
    }
}

for (let z = 0; z < correctAnswers.length; z++) {
    function correct() {
        correctAnswers[z];
    }
}

for (let p = 0; p < possibleAnswers.length; p++) {
    function showAnswers() {
        answerOne.textContent = possibleAnswers[p][0];
        answerTwo.textContent = possibleAnswers[p][1];
        answerThree.textContent = possibleAnswers[p][2];
        answerFour.textContent = possibleAnswers[p][3];
    };
}

answersEl.onclick = function selectedAnswer() {
    score++;
    console.log('score:', score)
    questionDisplayEl.style.display = "none";
}


// localStorage.setItem("highScoreLeaderboard", nameInput);

startButton.addEventListener('click', setTimer);
startButton.addEventListener('click', hideButton);
startButton.addEventListener('click', showQuestions);
startButton.addEventListener('click', showAnswers);



