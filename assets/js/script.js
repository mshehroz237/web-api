// making initial varibales
var index = 0;
var timer = 35;
var interval;
// selecting id time in html and storing it in timeEl
const timeEl = document.querySelector("#time")
var highScore = 0;
var timerId;

// created an array to hold all the questions and choices
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
    // selecting the question-container into q_container
    var q_conatiner = document.querySelector("#question-Container");
    //setting q_conatiner to empty everytime the function is ran
    q_conatiner.innerHTML = "";
    // creating an h1 element into honeEl
    var honeEl = document.createElement("h1");
    //adding questions to honeEl
    honeEl.textContent = questions[index].Quiz;
    //appending honeEl to q_container
    q_conatiner.appendChild(honeEl);
    //making a for loop to iterate till end of questions
    for (var i = 1; i < 5; i++) {
        //creating a button everytime and storing it inot choiceOne
        var choiceOne = document.createElement("button");
        // adding choices of question objects into choiceOne
        choiceOne.textContent = questions[index]["option" + i];
        //adding event listener to choiceOne buttons
        choiceOne.addEventListener("click", function (event) {
            //checking if current element is equals to option 1
            if (event.target.textContent === questions[index].option1) {
                //console logging to check the loop
                console.log(questions[index].option1);
                //console logging the index 
                console.log(index);
                //if option1 is chosen alert to display correct answer
                alert("Correct answer");
                //adding to index 1
                index++;
                // setting highScore to 5 if option1 is chosen
                highScore += 5;
            } else {
                // if anything else is clicked than option 1 alert saying wrong answer
                alert("wrong answer")
                //substract 10 seconds if wrong answer
                timer -= 10;
                //add to index to go to next question object
                index++;

            }
            // calling showWuestions function
            showQuestions();
        })
        //appending choiceOne into q_container
        q_conatiner.appendChild(choiceOne);

    }
}

//making a function for countdown
var countDown = function () {
    //storing html into timeEl
     timeEl.innerHTML = `Timer: ${timer} seconds` 
     // checking to see if timer less than 0 or highscore greater than 25
if (timer <= 0 || highScore>= 25 || questions.length[index]){
   //calling game over if any of the conditions above is true
    gameOver();
} else{ 
    //otherwise taking time off
    timer--;
}
}

// creating a function and setting it to localStorage
var gameOver = function () {
    //setting localStorage
    localStorage.setItem('highScore', highScore);
    //retrieving localStorage
    var HighScore = localStorage.getItem('highScore');
    //storing users name into playerName
    var playerName = prompt("Enter players name");
    // displaying final results with playername and final score
    var finalResults = alert(playerName + " " + "final score is " + " " + highScore );
}

// creating a button "Start-Quiz which will call our showQuestions and countDown fucntion"
var button1 = document.querySelector("#start");
button1.addEventListener("click", function () {
    showQuestions();
    countDown();
    timerId = setInterval(countDown,1000);
})



