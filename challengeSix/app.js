/*

GAME RULES:

 

- The game has 2 players, playing in rounds

- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score

- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn

- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn

- The first player to reach 100 points on GLOBAL score wins the game

 

*/

 

/*

YOUR 3 CHALLENGES

Change the game to follow these rules:

 

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)

 

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)

 

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

*/

 

// read winning score set by user

 

var scores, roundScore, activePlayer, gamePlaying, previousRoll;

 

init();

 

document.querySelector('.btn-roll').addEventListener('click', function () { //anonymous function

    if (gamePlaying) {

        //1. Random number

        var dice1 = Math.floor(Math.random() * 6) + 1;

        var dice2 = Math.floor(Math.random() * 6) + 1; // second dice

 

        //2. Display the result

        document.getElementById('dice-1').style.display = "block";

        document.getElementById('dice-2').style.display = "block";

 

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';

        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';





        // if 6 rolled two times in a row

        // if (dice1 || dice2 === 6 && previousRoll === 6) {

        //     // console.log("dice = " + dice + " and previousRoll = " + previousRoll);

        //     //lose entire score

        //     scores[activePlayer] = 0;

        //     document.querySelector('#score-' + activePlayer).textContent = 0;

        //     //next player's turn

        //     nextPlayer();

        // }

        //3. Update the round score IF the rolled number was NOT a 1

        if (dice1 !== 1 && dice2 !== 1) {

            //add score

            roundScore += dice1 + dice2;

            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {

            nextPlayer();

        }

 

        // if (dice && dice2 !== 1) { // if both dice don't equal 1

        //     //add score

        //     roundScore += (dice + dice2);

        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;

 

        // } else {

        //     //next player

        //     nextPlayer();

 

        // }

        // previousRoll = dice;

 

    }

});

 

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {

        //let user set the winning score

        var input = document.getElementById('winning-score').value;

        var winningScore;

        // Undefined, 0, null or "" are Coerced to false

        // anything else is Coerced to true

        if (input) {

            var winningScore = input;

            // console.log('the winner score is ' + winningScore)

        } else {

            winningScore = 25;

        }

        //add current score to global score

        scores[activePlayer] += roundScore;

        //update the UI

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

 

        //check if player won the game

        if (scores[activePlayer] >= winningScore) {

            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            document.getElementById('dice-1').style.display = 'none';

            document.getElementById('dice-2').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;

        } else {

            nextPlayer();

        }

 

    }

});

 

function nextPlayer() {

    //next player

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;

    document.getElementById('current-0').textContent = '0';

    document.getElementById('current-1').textContent = '0';

 

    document.querySelector('.player-0-panel').classList.toggle('active');

    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.add('active');

    document.getElementById('dice-1').style.display = 'none';

    document.getElementById('dice-2').style.display = 'none';

}




document.querySelector('.btn-new').addEventListener('click', init); //when someone clicks on new game call init function

 

function init() {

    scores = [0, 0];

    activePlayer = 0;

    roundScore = 0;

    gamePlaying = true;

 

    document.getElementById('dice-1').style.display = 'none';

    document.getElementById('dice-2').style.display = 'none';

 

    document.getElementById('score-0').textContent = '0';

    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';

    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';

    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');

    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

 

}

 

// // document.querySelector('#current-' + activePlayer).textContent = dice;

// // 

// console.log(x);

// function btn(){

// }

// document.querySelector('.btn-roll').addEventListener('click', btn); <-- call back function bc called by event listener

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice;

// var x = document.querySelector('#score-0').textContent;

 

 

