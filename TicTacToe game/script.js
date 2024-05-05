let boxes = document.querySelectorAll(".box")
let restart = document.querySelector(".restart")
let player_turn = document.querySelector("p")
let turn = "X"
let found_winner = false
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = turn
        turn = (turn === "X")? "O" : "X";
        player_turn.innerText = `Player ${turn}'s turn`
        box.disabled = true
        checkWinner()
        checkDraw()
    })
})

const checkWinner = () => {
    for(let pattern of winPatterns){
        let first = boxes[pattern[0]].innerText
        let second = boxes[pattern[1]].innerText
        let third = boxes[pattern[2]].innerText
        if(first != "" && second != "" && third != ""){
            if(first === second && second === third){
                player_turn.innerText = `Player ${first} is the winner!`
                found_winner = true
                disableBtns()
            }
        }
    }
}

const checkDraw = () => {
    let count = 0
    boxes.forEach((box) => {
        if(box.innerText != ""){
            count++;
        }
    })
    if(count===9 && !found_winner){
        player_turn.innerText = `Game is a draw!`
    }
    
}

const disableBtns = () => {
    boxes.forEach((box) => {
        box.disabled = true
    })
}

restart.onclick = () => {
    turn = "X"
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false
        player_turn.innerText = "Player X's turn"
    })
}