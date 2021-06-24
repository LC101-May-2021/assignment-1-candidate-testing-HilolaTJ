const input = require('readline-sync');

let candidateAnswers = [];

function askForName(){
let candidateName = "";
  candidateName = input.question("Candidate Name:  ");
  return;
}

function askQuestion(arrOfQuestions){
  for (let i=0; i < arrOfQuestions.length; i++) {
candidateAnswers[i] = input.question(questions[i]);
console.log(`Your answer: ${candidateAnswers[i]} \nCorrect answer: ${correctAnswers[i]}`);
  }
}

const questions = ['1) Who was the first American woman in space? ', '\n2) True or false: 5000 meters = 5 kilometers. ', '\n3) (5 + 3)/2 * 10 = ? ', '\n4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', '\n5) What is the minimum crew size for the International Space Station (ISS)? '];

const correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];

function gradeQuiz(candidateAnswers){
  let grade = 0;
  let numberOfcorrectAnswers = 0;
  for (let i=0; i < candidateAnswers.length; i++) {

     if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){

    numberOfcorrectAnswers += 1;
    grade = numberOfcorrectAnswers/candidateAnswers.length*100;

  }
}

console.log(`\n>>> Overall Grade: ${grade}% (${numberOfcorrectAnswers} of ${candidateAnswers.length} responses correct) <<<`);

if(grade >= 80){

console.log (">>> Status: PASSED <<<");
}else{
  console.log (">>> Status: FAILED <<<")
  }
}

function runProgram(){
  askForName();
  askQuestion(questions);
  gradeQuiz(candidateAnswers);
}
runProgram();

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