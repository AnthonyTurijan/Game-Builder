// forming an array to hold all images
let card = document.getElementsByClassName('card')
let cards = [...card]

//Fisher-Yates Shuffle Method
function shuffleCards(array){
    const cardDeck = array.length, temporaryValue, randomIndex;

    while (cardDeck !== 0){
        randomIndex = Math.floor(Math.random() * cardDeck);
        cardDeck -=1;
        temporaryValue = array[cardDeck];
        array[randomIndex] = temporaryValue
    }
    return array;
}
//Function for shuffling cards on new page
document.body.onload = newGame();

function newGame(){
    cards = shuffleCards(cards)
}

//adding on click event listener
// function clickCards(){
//     for (let i = 0; i < cards.length; i++){
//         cards[i].addEventListener('click', function(){
//             document.body.style.color = 'black'
//         })
//     }
// }