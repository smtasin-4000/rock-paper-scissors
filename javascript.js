const playerEL = document.getElementById('player')
const computerEL = document.getElementById('computer')
const resultEL = document.getElementById('result')
const chooseBtn = document.querySelectorAll('.btn')
let playerchoose
let computerchoose

chooseBtn.forEach(butn=>{butn.addEventListener('click',()=>{playerchoose=butn.textContent;
computerTurn()

playerEL.innerText = `You choosed: ${playerchoose}`
computerEL.innerText =`Computer choosed: ${computerchoose}`
resultEL.innerText = `Result: ${resultFun()}`


}
)})

function computerTurn(){
    let rand = Math.floor(Math.random()*3)+1
    switch (rand) {
        case 1:
            computerchoose = 'ROCK'
            break;
        case 2:
            computerchoose = 'PAPER'
            break;
        case 3:
            computerchoose = 'SCISSORS'
            break;
        
    }
    return computerchoose
}
function resultFun(){
    if(playerchoose===computerchoose){
        return 'Draw'
    }
    else if(computerchoose=="ROCK"){
return (playerchoose=="PAPER")?'You Win!!!':'You Loose'
    }
    else if(computerchoose=="PAPER"){
        return (playerchoose=="SCISSORS")?'You Win!!!':'You Loose'
            }
            else if(computerchoose=="SCISSORS"){
                return (playerchoose=="ROCK")?'You Win!!!':'You Loose'
                    }
}