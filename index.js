const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
// candidateName = input.question('Enter your name: ');
// console.log('Hello Astronaut Candidate ' + candidateName);

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question('Enter your name ');
  console.log ('Hello candidate ' + candidateName ).toUpperCase();
  
}


askForName ();
//messageCandidate();

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question1 = ['1. Who was the first American woman in space?' + '\n'];
let question2 = ['2. True or false: 5 kilometer = 5000 meters?'+ '\n'];
let question3 = ['3. (5 + 3)/2 * 10 ='  + '\n'];
let question4 = ['4. Given the array [8,' + ' Orbit'+ ' ,' + 'Trajectory' + ' ,' + '45] what entry is at index 2?' + '\n'];
let question5 = ['5. What is the minimum crew size for the ISS?'+ '\n'];
let correctAnswer = true;
let candidateAnswer;
let questions = [question1, question2, question3, question4, question5];
let correctAnswers = ['sally ride', 'true', '40', 'Trajectory', '3' ];
let candidateAnswers = [];


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(questions[i]);
 
}
// if (candidateAnswers != correctAnswers ) {
//    console.log('Sorry.' + '\n');
// } else {
//    console.log('Correct.' + '\n');
//     }


let i = 0;

while (i < questions.length ){
    candidateAnswers[i] = input.question(questions[i]);
    i++;

}


let grade = '';
    for (let i = 0; i < correctAnswers.length; i++){
      if (correctAnswers[i] === candidateAnswers[i]);
     
  //return grade = correctAnswers[i] - candidateAnswers[i];
}




// let pointsPossible = 5;

//     (pointspossible).on('input', function() {
//       calculate();
//     });
//     $('#pointsgiven').on('input', function() {
//      calculate(candidateAnswers);
//     });
//     function calculateScore(){
//         let pPos = parseInt('pointsPossible').val(); 
//         let pEarned = parseInt(candidateAnswers).val();
//         let percent = "";
//         if(isNaN(pPos) || isNaN(pEarned)){
//             perc=" ";
//            }else{
//            percent = ((pEarned/pPos) * 100).toFixed(5);
//            }

//         (pointsperc).val(percent);
//     }

// // });


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// function gradeQuiz(candidateAnswers) {
//   for (let i = 0; i < questions.length; i++){
//     let grade = 0;
  
//   return grade;
// }

function runProgram() {
  
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  //gradeQuiz(this.candidateAnswers);
}

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