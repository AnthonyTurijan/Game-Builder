//moves counter variables
let moves = 0
let counter = document.getElementById('moves')

//function for move counter
function moveCounter(){
    moves++;
    counter.innerHTML = moves
    // start time after first move
    if (moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer()
    }
}

//function for timer 

//declaring variables
var second = 0;
var minute = 0;
var hour = 0
var timer = document.querySelector('.timer')
var interval;
function startTimer(){
    interval = setInterval(() => {
        timer.innerHTML = minute +' '+ "mins" +" "+ second+' '+ "secs";
        second++;
        if (second ==60){
            minute++;
            second = 0;
        }
        if (minute ==60){
            hour++;
            minute = 0;
        }
    }, 1000);
}

//restart button


//function for win screen
var modal = document.getElementById('myModal');
var btn = document.getElementById('btn')
var span = document.getElementsByClassName('close')[0];
btn.onclick = function(){
    modal.style.display = 'block'
}
span.onclick = function(){
    modal.style.display = 'none'
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = 'none';
    }
}
let matchedCards = document.getElementsByClassName("game-card flip")
function victoryScreen(){
    if (matchedCards.length === 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;
        modal.style.display = 'block';
        document.getElementById('finalMove').innerHTML = moves;
        document.getElementById('totalTime').innerHTML = finalTime
    }
}

function resetGame(){
    removeClass();
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
    console.log('hello');

}

function modalReplay(){
    resetGame();
    modal.style.display = 'none';

}