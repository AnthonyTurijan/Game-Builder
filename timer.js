//moves counter variables
let moves = 0
let counter = document.getElementById('moves')

//function for move counter
function moveCounter(){
    moves++;
    counter.innerHTML = moves
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
        timer.innerHTML = minute + "mins" + second + "secs";
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