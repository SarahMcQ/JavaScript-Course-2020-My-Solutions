// Coding Challange 1

/* Mark and John are trying to compare their BMI which is calculated using the formula:

BMI = mass / height^2 = mass / (height * height).

(mass in kg and height in meter).

*/

//1. Store Mark's and John's mass and height in variables

var MarkMass = 10;

var MarkHeight = 3.1;

var JohnMass = 9;

var JohnHeight = 3.2;

//2. Calculate both their BMIs

var MarkBMI = MarkMass / (MarkHeight ** 2);

var JohnBMI = JohnMass / (JohnHeight ** 2);

console.log(MarkBMI);

console.log(JohnBMI);

//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

var higherBMI = MarkBMI >= JohnBMI;

console.log(higherBMI);

// 4. Print a string to the console containing the variable from step 3 (Something like is "Mark's BMI higher than John's? True")

console.log("It's " + higherBMI + " that Mark's BMI greater than John's.");