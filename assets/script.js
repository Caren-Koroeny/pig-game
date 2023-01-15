/* get access to webpage element so that the score to be 0 at the beginning of the game*/

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current1 = document.getElementById('current--0')
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let holdBtn = document.querySelector('.btn--hold');

// Initialize the value to zero
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let scores = [0 , 0]
let current = 0;
let activePlayer = 0;

// scores[activePlayer]

let switchPlayer = function(){
    current = 0
    document.getElementById(`current--${activePlayer}`).textContent = current; 
    activePlayer = activePlayer === 0? 1: 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

// Implement the functionality for Roll Dice button
rollDice.addEventListener('click',function(){
    /* 1. Generate a random number between 1 and 6 */
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);


    /* 2.Display the dice image with the random number */
    dice.classList.remove('hidden');
    dice.src = `assets/images/dice-${diceNumber}.png`;
    /* 3. If the random number is not 1 the add it to the acive players current score*/
    if(diceNumber != 1){
        current += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = current;
        // current1.textContent = current;
    }else{
        switchPlayer();
      
    }
    /* 4. If the random number is 1 then rest current score to zero and change the
     active player*/
})
// Implement Hold button functionality
holdBtn.addEventListener('click', function(){
    // 1. Add  current score to the global Score
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    // check if the player has reached maximum score = 100
    if(scores[activePlayer] >= 20){
        // finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`name--${activePlayer}`).textContent = "WINNER";
        // HIDE Dice Image
        dice.classList.add('hidden');
        rollDice.classList.add('hidden');
        holdBtn.classList.add('hidden');

    }else{
        switchPlayer();
    }

})



