// creating an object to hold an array of cards
window.onload = startGame()
//function that creates an array of cards/shuffles/adds clicks
function startGame(){
    document.addEventListener('DOMContentLoaded', function(){
    addClick();
    shuffle();
    //reset moves
    moves = 0;
    counter.innerHTML = moves;
    //reset timer
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector('.timer');
    timer.innerHTML = '0 mins 0 secs';
    clearInterval(interval);
    console.log('hello')
})


}
let hasFlippedCard = false;
let lockedBoard = false;
let firstCard, secondCard;

//function to add Event Listeners

function addClick(){
    const cards = document.getElementsByClassName('game-card');
    for(let i=0; i <cards.length; i++){
        // function to add Click Event Listener
        cards[i].addEventListener("click", flipCard);
        cards[i].addEventListener('click', victoryScreen)
    }
}

//function to Shuffle

function shuffle(){
    const cards = document.getElementsByClassName('game-card');
    for(let i=0; i <cards.length; i++){
        // function to shuffle cards
        let randomPosition = Math.floor(Math.random()* 12);
        cards[i].style.order = randomPosition
    }
}

//Function to flip card

function flipCard(){
    if (lockedBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');

    if(!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    } //second click
        hasFlippedCard = false;
        secondCard = this;
        
        matchCheck();
        moveCounter();
    
}
//function to check if card dataset matches
function matchCheck(){
    //do cards match?
        if (firstCard.dataset.framework === secondCard.dataset.framework){
            // its a match
           disableFlip();
        } else {
                // not a match
                unflipCards();
        }
}
// function for enabling flip status
function disableFlip(){
     firstCard.removeEventListener('click',flipCard);
     secondCard.removeEventListener('click',flipCard);

     resetBoard();
}

function unflipCards(){
    lockedBoard = true;

    setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetBoard();
            }, 500)
}
// function to reset board
function resetBoard(){
    [hasFlippedCard, lockedBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}

function removeClass(){
    const cards = document.getElementsByClassName('game-card');
    for(let i=0; i <cards.length; i++){
        cards[i].classList.remove('flip')
    }
}