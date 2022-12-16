const div = document.querySelector("#addedBtn")
const playerEL = document.getElementById('player')
const computerEL = document.getElementById('computer')
const resultEL = document.getElementById('result')
const chooseBtn = document.querySelectorAll('.btn')
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const sicssorsBtn = document.getElementById('scissors')
const playerPointshow = document.getElementById('playerPointshow')
const computerPointshow = document.getElementById('computerPointshow')


let playerchoose
let computerchoose
let playerPoint =0
let computerPOint=0




function play(){

    
chooseBtn.forEach(butn=>{butn.addEventListener('click',()=>{playerchoose=butn.textContent;
computerTurn()
pointCounter()
limitGame()
playerEL.innerText = `You choosed: ${playerchoose}`
computerEL.innerText =`Computer choosed: ${computerchoose}`
resultEL.innerText = `Result: ${resultFun()}`
playerPointshow.innerText =`Player Point: ${playerPoint}`
computerPointshow.innerText=`Computer Point: ${computerPOint}`

}
)})


}


play()
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
function pointCounter(){
    if(resultFun()=='You Win!!!'){
        playerPoint++
        }
    else if(resultFun()=='You Loose'){
            computerPOint++
        }
        else{
            return playerPoint,computerPOint
        }
        return playerPoint,computerPOint
}
function limitGame(){
    if(playerPoint>=5){
        rockBtn.remove()
        paperBtn.remove()
        sicssorsBtn.remove()
        const retryBtn =document.createElement('button')
        retryBtn.innerText ='Beat again?'
        div.append(retryBtn)
        retryBtn.addEventListener('click',()=>addChooseBtn())

    }
    else if(computerPOint>=5){
        rockBtn.remove()
        paperBtn.remove()
        sicssorsBtn.remove()
        const retryBtn =document.createElement('button')
        retryBtn.innerText ='Retry?'
        div.append(retryBtn)
        retryBtn.addEventListener('click',()=>addChooseBtn())
    }
}

function addChooseBtn(){
   
    playerPoint=0
    computerPOint=0
    div.append(rockBtn)
    div.append(paperBtn)
    div.append(sicssorsBtn)
    
}