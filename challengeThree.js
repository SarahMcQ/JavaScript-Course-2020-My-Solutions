// Coding Challenge 3

var bill = [124, 48, 268];

function tipCalculator(bill) {

var totalBill = [];

var tipAmount = [];

var x;

for(x of bill ) {

if (x < 50) {

totalBill.push(x + (x * .2));

tipAmount.push(Math.round(x * .2));

} else if (x >= 50 && x < 200) {

totalBill.push(x + (x * .15));

tipAmount.push(Math.round(x * .15));

} else if (x > 200) {

totalBill.push(x + (x * .10));

tipAmount.push(Math.round(x * .1));

}  

};

 

console.log('The total tips are: ' + tipAmount);

console.log('The total bills are: ' + totalBill);

 

};

 

tipCalculator(bill);

 

