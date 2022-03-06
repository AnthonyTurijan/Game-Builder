// creating an object to hold an array of cards
document.addEventListener('DOMContentLoaded', function(){
    const card = document.getElementsByClassName('game-card');
    for(let i=0; i <card.length; i++){
        card[i].addEventListener("click", flipCard)
    }
})

function flipCard(){
    console.log("I was clicked")
    console.log(this)
}