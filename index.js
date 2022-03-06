// creating an object to hold an array of cards
document.addEventListener('DOMContentLoaded', function(){
    const card = document.getElementsByClassName('game-card');
    for(let i=0; i <card.length; i++){
        card[i].addEventListener("click", flipCard)
    }
})
let hasFlippedCard = false;
let firstCard, secondCard;
//Function to flip card
function flipCard(){
    this.classList.toggle('flip');

    if(!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;
        
        matchCheck();
    }
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
            secondCard.removeEventListener('click',flipCard)
}

function unflipCards(){
    setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
            }, 1500)
}