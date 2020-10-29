// Code Quiz JS

var startButton = $("#start");
var timerEl = $('.timer');
var questionsHeader = $('.questions');
var quizEl = $('.quiz');
var questionDisplayEl = $('.question-display');
var question = $('#question-text');
var answers = $('.answers');
var countdown = 100;
var score = 0;
var questionCounter = 0;
var answerZero = $('#answer-0');
var answerOne = $('#answer-1');
var answerTwo = $('#answer-2');
var answerThree = $('#answer-3');



function displayQuestion() {
    question.text(questionArray[questionCounter].questionText);
    questionArray[questionCounter].answers.forEach((answer, i) => {
        $(`#answer-${i}`).text(answer)
    })
}

questionArray = [

    { questionText: 'What is JavaScript?', answers: ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 3 },
    { questionText: 'What is not a JavaScript Data Type?', answers: ['Object', 'Defined', 'Number', 'String'], correctAnswer: 1 },
    { questionText: 'Which is not a looping structure in JavaScript?', answers: ['If', 'For', 'While', 'Do-while'], correctAnswer: 0 },
    { questionText: 'Whats an undefined value in JavaScript?', answers: ['Computable', 'Variable not assigned to a value', 'Property exists', 'A plegmen variable'], correctAnswer: 1 },
    { questionText: 'What type of popup boxes are in JavaScript?', answers: ['Red Alert', 'Avid', 'Short', 'Prompt'], correctAnswer: 3 },
    { questionText: 'Is the data type of variables in Javascript object data types?', answers: ['True', 'False', 'Never', 'Ever'], correctAnswer: 0 },
    { questionText: 'Does JavaScript have concept level scope?', answers: ['Yes', 'No', 'Maybe', 'So'], correctAnswer: 1 },
    { questionText: 'What year did JavaScript make an appearance?', answers: ['1990', '2010', '1970', '1995'], correctAnswer: 3 },
    { questionText: 'Is Java a nickname for JavaScript?', answers: ['Yes', 'No', 'Sometimes', 'Depends on the case'], correctAnswer: 1 },
    { questionText: 'What are JavaScript cookies?', answers: ['Yummy', 'Bugs', 'Large storage files', 'Small test files'], correctAnswer: 3 },

];


function setTimer() {
    var timerTotal = setInterval(function () {
        countdown--;
        timerEl.text(countdown);

        if (countdown === 0) {
            clearInterval(timerTotal);
            questionsHeader.text('Game Over');
            question.text('Thanks for playing! Try again :)');
            answers.text('');
        }
    }, 1000);
}


function hideButton() {
    startButton.hide();
    quizEl.hide();
    questionDisplayEl.css('display', 'inline');
}

startButton.on('click', () => {
    setTimer();
    hideButton();
    displayQuestion();
});



$('.answerButtons').on('click', function () {
    var answerSelected = this.id[this.id.length - 1];
    var answerParsed = parseInt(answerSelected);
    var correctAnswerNumber = questionArray[questionCounter].correctAnswer;


    if (answerParsed === correctAnswerNumber) {
        score++;
        questionCounter++;
        displayQuestion();
    } else {
        questionCounter++;
        displayQuestion();
    }
});


        // check for end of game (no more question) 
          // if it is the end of the game, display end of game stuff
          // add high score (or check hs...)
        // if its NOT the end of the game
          // show the next question
    // else if they get the answer wrong...
        // check for end of game
        // increment question counter
        // display next question

    //}





