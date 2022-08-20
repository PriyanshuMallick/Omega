// Get Choices
const choices = document.querySelectorAll('[data-choices]')

// Winning Rules
const RULES = [

    {
        player: 'rock',
        opponent: 'scissors',
    },
    {
        player: 'scissors',
        opponent: 'paper',
    },
    {
        player: 'paper',
        opponent: 'rock',
    },
]

// const displayChoice = [✊🏽,✋🏽,✌🏽]

// Global Variables
let playerChoice, playerName = "Lucifer"
let playerScore = 00,
    opponentScore = 00

// Changing Player Name
document.getElementById('playerName').innerHTML = playerName
console.log(playerName)

// main

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        playerChoice = choice.dataset.choices // Geting Player Choice
        console.log(playerChoice)
        doesPlayerWin()
    })
})

// Function to check is the player wins

function doesPlayerWin() {
    let ranNum = Math.floor(Math.random() * choices.length)
    let computerChoice = RULES[ranNum].opponent
    console.log(computerChoice)
    if (playerChoice === computerChoice) {
        return displayAction(0)
    }
    for (let i = 0; i < choices.length; i++) {
        if (RULES[i].player === playerChoice && RULES[i].opponent === computerChoice) {
            return displayAction(1)
        }
    }
    return displayAction(-1)
}

function displayAction(result) {
    console.log(result)
    setScore(result)
}

function setScore(result) {
    if (result === 1) {
        playerScore += 1
        document.getElementById(playerScore).innerHTML = checkNum(playerScore)
        // printScore('playerScore', playerScore)
    } else if (result === -1) {
        opponentScore += 1
        document.getElementById(opponentScore).innerHTML = checkNum(opponentScore)
        // printScore('opponentScore', opponentScore)
    }
}

// function printScore(id, score) {
//     if (score < 10)
//         document.getElementById(id).innerHTML = ('0' + score)
//     else
//         document.getElementById(id).innerHTML = score
// }

function checkNum(num){
    return (num <10 ? '0' + num : num)
}

// setInterval(setTimer, 1000);

function setTimer(){
    startTime = Math.floor(Date.now()/1000)
    let time = 0
    while (time < 3) {
        const currentTime = Math.floor(Date.now() / 1000)
        time = Math.floor(startTime - currentTime)
        

    }
}


// function startTimeCounter() {
//     var now = Math.floor(Date.now() / 1000); // get the time now
//     var diff = now - startTime; // diff in seconds between now and start
//     var m = Math.floor(diff / 60); // get minutes value (quotient of diff)
//     var s = Math.floor(diff % 60); // get seconds value (remainder of diff)
//     m = checkTime(m); // add a leading zero if it's single digit
//     s = checkTime(s); // add a leading zero if it's single digit
//     document.getElementById("idName").innerHTML = m + ":" + s; // update the element where the timer will appear
//     var t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
// }