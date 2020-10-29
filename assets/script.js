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
console.log('score:', score)
var answerZero = $('#answer-0');
var answerOne = $('#answer-1');
var answerTwo = $('#answer-2');
var answerThree = $('#answer-3');

// var allQuestions = ['What is JavaScript?', 'What is not a JavaScript Data Type?', 'Which is not a looping structure in JavaScript?', 'Whats an undefined value in JavaScript?', 'What type of popup boxes are in JavaScript?', 'Is the data type of variables in Javascript object data types?', 'Does JavaScript have concept level scope?', 'What year did JavaScript make an appearance?', 'What are JavaScript cookies?']

// var possibleAnswers = [
//     ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'],
//     ['Object', 'Defined', 'Number', 'String'],
//     ['If', 'For', 'While', 'Do-while'],
//     ['Computable', 'Variable not assigned to a value', 'Property exists', 'A plegmen variable'],
//     ['Red Alert', 'Avid', 'Short', 'Prompt'],
//     ['True', 'False', 'Never', 'Ever'],
//     ['Yes', 'No', 'Maybe', 'So'],
//     ['1990', '2010', '1970', '1995'],
//     ['Yes', 'No', 'Sometimes', 'Depends on the case'],
//     ['Yummy', 'Bugs', 'Large storage files', 'Small test files']
// ]

// var correctAnswers = ['A programming language', 'Defined', 'If', 'Variable not assigned to a value', 'Prompt', 'True', 'No', '1995', 'Yes', 'Small test files']

// $(document).on('click', '#start', () => { })



function displayQuestion() {
    question.text(questionArray[questionCounter].questionText);
    questionArray[questionCounter].answers.forEach((answer, i) => {
        $(`#answer-${i}`).text(answer)
    })
}

questionArray = [

    { questionText: 'What is JavaScript?', answers: ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 3 },
    { questionText: 'What is not a JavaScript Data Type?', answers: ['Object', 'Defined', 'Number', 'String'], correctAnswer: 1 },
    // { questionText: 'What is JavaScript?', answers ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 4 },
    // { questionText: 'What is JavaScript?', answers ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 4 },
    // { questionText: 'What is JavaScript?', answers ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 4 },
    // { questionText: 'What is JavaScript?', answers ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 4 },
    // { questionText: 'What is JavaScript?', answers ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 4 },
    // { questionText: 'What is JavaScript?', answers ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 4 },
    // { questionText: 'What is JavaScript?', answers ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 4 },
    // { questionText: 'What is JavaScript?', answers ['A foreign language', 'A DOM', 'A coffee brand', 'A programming language'], correctAnswer: 4 },

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

    };
});


        // increase the score
        // score++;
        // increment our question counter 
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





