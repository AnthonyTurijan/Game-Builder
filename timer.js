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

//function for win screen
var modal = document.getElementById('myModal');
var btn = document.getElementById('btn')
var span = document.getElementsByClassName('close')[0];
console.log(modal)
console.log(btn)
console.log(span)
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