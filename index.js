const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question1 = ['1. Who was the first American woman in space?' + '\n'];
let question2 = ['2. True or false: 5 kilometer == 5000 meters?'+ '\n'];
let question3 = ['3. (5 + 3)/2 * 10 = ?)' + '\n'];
let question4 = ["4. Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2?" + '\n'];
let question5 = ['What is the minimum crew size for the ISS?'];
let correctAnswer;
let candidateAnswer;
let questions = [question1, question2, question3];
let correctAnswers = ['sally ride', 'true', 40, 'Trajectory', 3 ];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('Candidate Name: ');
  console.log(candidateName);

}
askForName;
 
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question('question');
if (candidateAnswer === correctAnswers) {
   console.log('Correct.' + '\n');
} else {
   console.log('Sorry.' + '\n');
}
}
let i = 0;

while (i < questions.length ){
    candidateAnswers[i] = input.question(questions[i]);
    i++;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < questions.length; i++){
    console.log()
  }

  let grade = '';
    for (let i = 0; i < correctAnswers.length; i++){
      if (correctAnswers[i] === candidateAnswers[i]);
      console.log('this is working');
    }
    
  

  //return grade = correctAnswers[i] - candidateAnswers[i];
}

//___________POINTS_________
// <input type='text' id="pointspossible"/>
// <input type='text' id="pointsgiven" />
// <input type='text' id="pointsperc" disabled/>
// JavaScript :

//     $(function(){

//     $('#pointspossible').on('input', function() {
//       calculate();
//     });
//     $('#pointsgiven').on('input', function() {
//      calculate();
//     });
//     function calculate(){
//         var pPos = parseInt($('#pointspossible').val()); 
//         var pEarned = parseInt($('#pointsgiven').val());
//         var perc="";
//         if(isNaN(pPos) || isNaN(pEarned)){
//             perc=" ";
//            }else{
//            perc = ((pEarned/pPos) * 100).toFixed(3);
//            }

//         $('#pointsperc').val(perc);
//     }

// });


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
runProgram;

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};