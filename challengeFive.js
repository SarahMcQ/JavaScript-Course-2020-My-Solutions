/********** CODING CHALLENGE 5

Remember the tip calculater challenge? Let's create a more advanced 

version using everything we learned.

This time, John and his family went to 5 different restaurants

the bills were $124, $48, $268, $180 and $42.

John likes to tip 20% of the bill when the bill is less than $50, 15% when 

the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values

2. Add a method to calculate the tip

3. This method should include a loop to iterate over all the paid bills and 

do the tip calculations

4. As an output, create 1) a new array containing all tips, and 2) an array 

containing final paid amounts (bill + tip). HINT: Start with two empty arrays

[] as properties and then fill them up in the loop.

*/

// Part I: John's Fam

var John = {

    bills: [124, 48, 268, 180, 42],

    calcTip: function () {

        this.tips = [];

        this.finalPaid = [];

        for (var x = 0; x < this.bills.length; x++) {

            // determine percentage based on tipping rules

            var bill = this.bills[x];

            var percentage;

            if (bill < 50) {

                percentage = .2;

            } else if (bill >= 50 && bill <= 200) {

                percentage = .15;

            } else {

                percentage = .1;

            }

            this.tips[x] = bill * percentage;

            this.finalPaid[x] = bill + bill * percentage;

            // for(var i=0; i < this.tips.length; i++){

            //     averageTip += Math.round(this.tips[i]);

            //    };



            // console.log("The average tip for John's family was $" + averageTip/this.tips.length);

            // console.log("All of John's fam's tips = " + this.tips);

            // console.log("The final amounts John's fam paid = " + this.finalPaid);

        }

    }

};

John.calcTip();

console.log(John);

//  EXTRA: Mark's family also went on a holiday, going to 4 different restaurants. The bills

//  were $77, $375, $110, and $45.

//  Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is 

//  between $100 and $300, and 25% if the bill is more than $300 (different than JOhn).



//  5. Implement the same functionality as before this time using Mark's tipping rules.



//  6. Create a function (not a method) to calculate the average of a given array of tips.

//  HINT: Loop over the array, and in each iteration store the current sum in a variable 

//  (starting from 0). After you have the sum of the array, divide it by the number of 

//  elements in it (that's how you calculate the average)

//  7. Calculate the average tip for each family

//  8. Log to the console which family paid the highest tips on average

// Part I: Mark's Fam

var Mark = {

    bills: [77, 375, 110, 45],

    calcTip: function () {

        this.tips = [];

        this.finalPaid = [];

        var bill = this.bills;

        for (var x = 0; x < this.bills.length; x++) {

            var bill = this.bills[x];

            var percentage;

            if (bill < 100) {

                percentage = .2;

            } else if (bill >= 100 && bill <= 300) {

                percentage = .1;

            } else if (bill > 200) {

                percentage = .25;

            }

            this.tips[x] = bill * percentage;

            this.finalPaid[x] = bill + bill * percentage;

        }
    }
};



Mark.calcTip();

John.calcTip();

function calculateAverage(tips) {

    var sum = 0;

    for (var i = 0; i < tips.length; i++) {

        sum += tips[i];

    }

    return sum / tips.length;

}

// do the calculations

John.average = calculateAverage(John.tips);

Mark.average = calculateAverage(Mark.tips);

if (John.average > Mark.average) {

    console.log("John made more tips on average of " + John.average);

} else {

    console.log("Mark made more tips on average of " + Mark.average);

};