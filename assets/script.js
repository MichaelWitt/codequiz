// Code Quiz JS

var startButton = $("#start");
var timerEl = $('.timer');
var questionsHeader = $('.questions');
var quizEl = $('.quiz');
var questionDisplayEl = $('.question-display');
var question = $('#question-text');
var answers = $('.answers');
var playAgain = $('.playagain');
var answerZero = $('#answer-0');
var answerOne = $('#answer-1');
var answerTwo = $('#answer-2');
var answerThree = $('#answer-3');
var correctIncorrect = $('#solutions');
var countdown = 50;
var score = 0;
var questionCounter = 0;

// Questions Displayed
function displayQuestion() {
    question.text(questionArray[questionCounter].questionText);
    questionArray[questionCounter].answers.forEach((answer, i) => {
        $(`#answer-${i}`).text(answer)
    })
}

// Questions
questionArray = [

    { questionText: 'What is JavaScript?', answers: ['A script', 'A DOM', 'A coffee bean', 'A programming language'], correctAnswer: 3 },
    { questionText: 'What isnt a JavaScript Data Type?', answers: ['Object', 'Defined', 'Number', 'String'], correctAnswer: 1 },
    { questionText: 'Which isnt a looping structure in JavaScript?', answers: ['If', 'For', 'While', 'Do-while'], correctAnswer: 0 },
    { questionText: 'Whats an undefined value in JavaScript?', answers: ['Computable', 'Unassigned', 'Property', 'A variable'], correctAnswer: 1 },
    { questionText: 'What type of popup boxes are in JavaScript?', answers: ['Red Alert', 'Avid', 'Short', 'Prompt'], correctAnswer: 3 },
    { questionText: 'Are Javascript variables object data types?', answers: ['True', 'False', 'Never', 'Ever'], correctAnswer: 0 },
    { questionText: 'Does JavaScript have concept level scope?', answers: ['Yes', 'No', 'Maybe', 'So'], correctAnswer: 1 },
    { questionText: 'What year did JavaScript make an appearance?', answers: ['1990', '2010', '1970', '1995'], correctAnswer: 3 },
    { questionText: 'Is Java a nickname for JavaScript?', answers: ['Yes', 'No', 'Sometimes', 'Depends'], correctAnswer: 1 },
    { questionText: 'What are JavaScript cookies?', answers: ['Yummy', 'Bugs', 'Large storage files', 'Small test files'], correctAnswer: 3 },
    { questionText: 'End Game', answers: ['Thanks', 'For', 'Playing', 'Friends'] },
];

// Timer
function setTimer() {
    var timerTotal = setInterval(function () {
        countdown--;
        timerEl.text(countdown);

        if (countdown === 0) {
            clearInterval(timerTotal);
            timerEl.hide();
            questionsHeader.text('Game Over');
            question.text('Thanks for playing!');
            answers.html(`<a href="index.html" alt="Page reload">
        <button class="answerButtons answers">Play Again</button></a>`);
        }

        if (questionCounter === 10) {
            clearInterval(timerTotal);
        }

    }, 1000);
}

// Hide Begin Card
function hideButton() {
    startButton.hide();
    quizEl.hide();
    questionDisplayEl.css('display', 'inline');
}

// Start Game 
startButton.on('click', () => {
    setTimer();
    hideButton();
    displayQuestion();
});

// Answer Click Events
$('.answerButtons').on('click', function () {
    var answerSelected = this.id[this.id.length - 1];
    var answerParsed = parseInt(answerSelected);
    var correctAnswerNumber = questionArray[questionCounter].correctAnswer;


    if (answerParsed === correctAnswerNumber) {
        score++;
        questionCounter++;
        displayQuestion();
        correctIncorrect.text('Correct :)');
        setTimeout(function () { $("#solutions").hide(); }, 700);
        correctIncorrect.show().delay(500);

    } else {
        questionCounter++;
        displayQuestion();
        correctIncorrect.text('Incorrect');
        setTimeout(function () { $("#solutions").hide(); }, 700);
        correctIncorrect.show().delay(500);
    }

    if (questionCounter === 10) {
        questionsHeader.text('Thanks For Playing!');
        var timeAccomplished = (50 - countdown);
        question.text('Score: ' + score + '/10 ' + 'Time: ' + timeAccomplished + ' Seconds');
        timerEl.hide();
        answers.html(`<a href="index.html" alt="Page reload">
        <button class="answerButtons answers">Play Again</button></a>`);
    }

});