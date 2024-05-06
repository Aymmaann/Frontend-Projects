let user_score = 0
let comp_score = 0
let game_message = document.querySelector(".game_message")
let userScore = document.querySelector("#user-score")
let compScore = document.querySelector("#computer-score")
let resetGame = document.querySelector(".reset-btn")
const choices = document.querySelectorAll(".choices")

let genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * options.length)
    return options[index]
}

let updateScore = () => {
    userScore.innerText = user_score
    compScore.innerText = comp_score
}

resetGame.onclick = () => {
    user_score = 0
    comp_score = 0
    userScore.innerText = user_score
    compScore.innerText = comp_score
    game_message.innerText = "Rock, Paper or Scissors?"
}

const playGame = (userChoice) => {
    const compChoice = genComputerChoice()
    if(userChoice === compChoice){
        game_message.innerText = `It's a draw`
        user_score++
        comp_score++
    } 
    else {
        let userWin = true
        if(userChoice==="rock" && compChoice==="paper" || userChoice==="paper" && compChoice==="scissors" || userChoice==="scissors" && compChoice==="rock"){
            userWin = false
        }
        if(userWin){
            game_message.innerText = `User has won! the computer chose ${compChoice}`
            user_score++
        } else {
            game_message.innerText = `User has lost, the computer chose ${compChoice}`
            comp_score++
        }
    }
    updateScore()
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})