var index = 0;
var timer = 35;
var interval;
const timeEl = document.querySelector("#time")
var highScore = 0;
var timerId;

var questions = [{
    "Quiz": "Q.1) What does Html stand for?",
    "option1": "HyperText Markup Language",
    "option2": "HyperText Markup ",
    "option3": "HyperText Language",
    "option4": "Markup Language",
},
{
    "Quiz": "Q.2) What does css stand for?",
    "option1": "Cascading Style Sheets",
    "option2": "Cascading Style Sheets",
    "option3": "Cascading Style",
    "option4": "Style Sheets",

},
{
    "Quiz": "Q.3) What is purpose of javascript ",
    "option1": "create dynamic and interactive web content",
    "option2": "make style sheets",
    "option3": "create basic html",
    "option4": "HyperText Markup Language",
},
{
    "Quiz": "Q.4) What is purpse of html ",
    "option1": "create basics for a webpage",
    "option2": "create interacitivity in webpage",
    "option3": "HyperText Markup Language",
    "option4": "addings colors to webpage",
},
{
    "Quiz": "Q.5) What are some libraries of javscript?",
    "option1": "j query ui , j query and bootstrap",
    "option2": "css",
    "option3": "html and css",
    "option4": "bootstrap",
}
]
var showQuestions = function () {
    var q_conatiner = document.querySelector("#question-Container");
    q_conatiner.innerHTML = "";
    var honeEl = document.createElement("h1");
    honeEl.textContent = questions[index].Quiz;
    q_conatiner.appendChild(honeEl);
    for (var i = 1; i < 5; i++) {
        var choiceOne = document.createElement("button");
        choiceOne.textContent = questions[index]["option" + i];
        choiceOne.addEventListener("click", function (event) {
            if (event.target.textContent === questions[index].option1) {
                console.log(questions[index].option1);
                console.log(index);
                alert("Correct answer");
                index++;
                highScore += 5;
            } else {
                alert("wrong answer")
                timer -= 10;
                index++;

            }
            showQuestions();
        })
        q_conatiner.appendChild(choiceOne);

    }
}

var countDown = function () {
     timeEl.innerHTML = `Timer: ${timer} seconds` 
if (timer <= 0 || highScore>= 25 || questions.length[index]){
    gameOver();
} else{
    timer--;
}
}


var gameOver = function () {
    localStorage.setItem('highScore', highScore);
    var HighScore = localStorage.getItem('highScore');
    var playerName = prompt("Enter players name");
    var finalResults = alert(playerName + " " + "final score is " + " " + highScore );
}

var button1 = document.querySelector("#start");
button1.addEventListener("click", function () {
    showQuestions();
    countDown();
    timerId = setInterval(countDown,1000);
})



