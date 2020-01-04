/**** Coding Challenge 4 */

var Mark = {

    fullName: 'Mark Meddows',

    mass: 8,

    height: 10,

    calcBMI: function () {

        this.BMI = (this.mass / this.height ** 2);

    }

};



Mark.calcBMI();

// console.log(Mark);

var John = {

    fullName: 'John Jimmy',

    mass: 7,

    height: 11,

    calcBMI: function () {

        this.BMI = (this.mass / this.height ** 2);

    }

};



John.calcBMI();

// console.log(John.BMI);

const MarkBMI = Mark.BMI;

const JohnBMI = John.BMI;

console.log(MarkBMI);

console.log(JohnBMI);



function highestBMI(Mark, John) {

    var Mark = {

        fullName: 'Mark Meddows',

        mass: 9,

        height: 14,

        calcBMI: function () {

            this.BMI = (this.mass / this.height ** 2);

        }

    };

    var John = {

        fullName: 'John Jimmy',

        mass: 9,

        height: 14,

        calcBMI: function () {

            this.BMI = (this.mass / this.height ** 2);

        }

    };



    Mark.calcBMI();

    John.calcBMI();

    const MarkBMI = Mark.BMI;

    const JohnBMI = John.BMI;



    if (MarkBMI > JohnBMI) {

        console.log("Mark has the highest BMI at " + MarkBMI);

    } else if (JohnBMI > MarkBMI) {

        console.log("John has the highest BMI at " + JohnBMI);

    } else {

        console.log("The BMI is a tie!");

    }

}

highestBMI();