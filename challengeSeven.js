/********** CODING CHALLENGE 7
 
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

function playGame() {
// 1 build a function constructor
function Question(theQuestion, answers, correctAnswer) {
    this.theQuestion = theQuestion;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};
// 2 create a couple of questions using the constructor
var questionOne = new Question('What is the best food?', ['0: cheese burgers ', '1: ice cream ', '2: brocoli '], 1); 
var questionTwo = new Question('What is the best pet?', ['0: dog', '1: parrot ', '2: cat '], 2); 
var questionThree = new Question('Where is the best place to vacation?', ['0 : Miami ', '1 : Paris ', '2: Maine '], 2);
// 3. Store them all inside an array
var Questions = [questionOne, questionTwo, questionThree];
// 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
var randomQuestion = Questions[Math.floor(Math.random()*Questions.length)];
// document.body.innerHTML = randomQuestion.theQuestion +' '+ randomQuestion.answers;
console.log(randomQuestion.theQuestion +' '+ randomQuestion.answers);
// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
var ask = prompt(randomQuestion.theQuestion);
// 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
if (ask == randomQuestion.correctAnswer){
    console.log("That's right!")
} else {
    console.log("Nope!");
}
console.log("The right answer is " + randomQuestion.correctAnswer);
};

playGame();
