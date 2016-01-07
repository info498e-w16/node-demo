'use strict';

var readline = require('readline');

console.log("Hello class!");

var scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var questions = [
    "What is your name? ",
    "What is your favorite color? "
];
var answers = [];
var currentQuestion = 0;

var askQuestion = function(answer) {
    answers.push(answer);
    
    //go onto next question!
    currentQuestion = currentQuestion+1; //go to next question
    if(currentQuestion < questions.length) { //recursive condition
        scanner.question(questions[currentQuestion], askQuestion);
    }
    else {
        console.log("Answers: " + answers);
        scanner.close();
    }
}

// var colorAnswer = function(color) {
//     answers.push(color);
//     //console.log("Your favorite color is: "+color);
//     scanner.question("What is your favorite color? ", colorAnswer);

//     scanner.close();
// };

// scanner.question("What is your name?", function(name){
//     answers.push(name);
    
//     scanner.question("What is your favorite color? ", colorAnswer);   
    
// });

//console.log("I'm waiting... ");

//launch the recursion
scanner.question(questions[currentQuestion], askQuestion);
