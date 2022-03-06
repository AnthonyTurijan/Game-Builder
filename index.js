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
        
        //do cards match?
        if (firstCard.dataset.framework === secondCard.dataset.framework){
            // its a match
            firstCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click',flipCard)
        } else {
                // not a match
                setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
            }, 1500)
        }
    }
}
// declaring flipped card status

