var keys = document.querySelectorAll('.keys');
var input = document.getElementById('inputN')

var disp = document.querySelector(".display");

var currentToGuess = 0;
var tries = 5;



function getRandNum(){
    let min = 1;
    let max = 99;

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createElements(direction, number){

    let arrow = direction ? "uparrow" : "downarrow"

    var ins =`<div class="ins">
        <div class="num">
          <div class="${arrow}"></div>
        </div>
        <div class="current">${number}</div>
      </div>`;

        disp.innerHTML += ins;
}

function attachListners()
{
    keys.forEach(function(key){
        key.addEventListener('click', (event)=>{
            input.value += event.target.id;
        });
    });
}

function startGame(){
    attachListners();
    currentToGuess = getRandNum();
}

function submit(){
    let num = input.value;
    input.value = "";
    if(tries > 1){
        if(num < 1 || num > 99)
            alert("The number should be between 1 and 99.");
        else{
            if(num == currentToGuess){
                createElements(false, num);
                let res = confirm("Congrats! The number was " + currentToGuess+ ".\nWant to play again?");
                if(res){
                    location.reload();
                }
            }
            else{
                if(num > currentToGuess){
                    createElements(false, num);
                    updateTries();
                }
                else{
                    createElements(true, num);
                    updateTries();
                }
            }
        }
    }
    else{
        if(num == currentToGuess){
            let resp = confirm("Congrats! The number was " + currentToGuess + ".\nWant to play again?");
            if(res){
                location.reload();
            }
        }
        else{
            let res = confirm("Failed! You've exhausted your tries. The number was " + currentToGuess+ ".\nWant to play again?");
            if(res){
                location.reload();
            }
    }
}

}

function restart(){
    location.reload();
}

function updateTries(){
    tries -= 1;
    console.log(tries);
    document.querySelector('.remaining').innerHTML = ""+tries+"";
}

function clearIn(){
    input.value = "";
}

startGame();