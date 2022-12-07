const playerText = document.getElementById('playerText')
const computerText = document.getElementById('computerText')
const resultText = document.getElementById('resultText')
const choosebtn = document.querySelectorAll('.chceBtn')
let player;
let computer;
let result;
choosebtn.forEach(btn=>{btn.addEventListener('click',()=>{
    player = btn.textContent
    computerChoice()
    result = winchecker()
    playerText.textContent = `Player:${player}`;
    computerText.textContent = `Computer:${computer}`
    resultText.textContent = `Result:${result}`
})})
function computerChoice(){
   let n =  Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
   switch(n){
    case 1:
computer = 'ROCK'
    break
    case 2:
computer = 'PAPER'
    break
    case 3:
computer = 'SCISSORS'
    break
   }
}
function winchecker(){
    if(computer==player){
        return 'draw'
    }
    else if(player=='ROCK'){
        return (computer=='PAPER')?'player loose':'player win'
    }
    else if(player=='PAPER'){
        return (computer=='SCISSORS')?'player loose':'player win'
    }
    else if(player=='SCISSORS'){
        return (computer=='ROCK')?'player loose':'player win'
    }
}
