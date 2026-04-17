let board =[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let player = 1
let gameover = false
let scoreX = 0
let scoreO = 0

function restartGame() {
    board =[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
    ];

    player = 1
    gameover = false

    document.querySelectorAll(".cell").forEach(cell => {cell.textContent = ""})
    document.querySelectorAll(".cell").forEach(cell => {cell.className = "cell"})
    document.getElementById("message").textContent = ""
    document.getElementById("playerturn").textContent = "Player 1 turn (X)"

}

function resetScore(){
    scoreX = 0
    scoreO = 0
    updateScoreboard()
}


function on_click(event) {
    if (gameover === true) return;
    //console.log(board)
    let cell = event.currentTarget
    let cellID = Number(cell.id)
    let row = Math.floor(cellID / 3);
    let col = cellID % 3;

    if (board[row][col] !== "") return

    if (player === 1){
        cell.textContent = "X"
        cell.classList.add("X");
        board[row][col] = "X"
        player = 2
        document.getElementById("playerturn").textContent = `Player 2 turn (O)`

    } else if (player === 2){
        cell.textContent = "O"
        cell.classList.add("O");
        board[row][col] = "O"
        player = 1
        document.getElementById("playerturn").textContent = `Player 1 turn (X)`
    }
    checkBoard(board)

};

function checkBoard(board) {
//row check
    for (let i = 0; i < 3; i++){
        if (board[i][0] !== "" &&
            board[i][0] === board[i][1] && 
            board[i][1] === board[i][2]){
            gameover = true
            console.log(`${board[i][0]} is the winner`)
            document.getElementById("message").textContent = `${board[i][0]} is the winner`
            addWinner(board[i][0])
            document.getElementById("playerturn").textContent = "Game over";
            return
        }
    }
// column check
    for (let i = 0; i < 3; i++){
        if (board[0][i] !== "" &&
            board[0][i] === board[1][i] && 
            board[1][i] === board[2][i]){
            gameover = true
            console.log(`${board[0][i]} is the winner`)
            document.getElementById("message").textContent = `${board[0][i]} is the winner`
            addWinner(board[0][i])
            document.getElementById("playerturn").textContent = "Game over";
            return
        }
    }

//diagonal check
        if (board[0][0] !== "" &&
            board[0][0] === board[1][1] && 
            board[1][1] === board[2][2]) {
            gameover = true
            console.log(`${board[1][1]} is the winner`)
            document.getElementById("message").textContent = `${board[1][1]} is the winner`
            addWinner(board[1][1])
            document.getElementById("playerturn").textContent = "Game over";
            return
        }
        if (board[0][2] !== "" &&
            board[0][2] === board[1][1] && 
            board[1][1] === board[2][0]) {
            gameover = true
            console.log(`${board[1][1]} is the winner`)
            document.getElementById("message").textContent = `${board[1][1]} is the winner`
            addWinner(board[1][1])
            document.getElementById("playerturn").textContent = "Game over";
            return
    }
//full board check for draw

        if (checkDraw(board) === true){
            gameover = true
            console.log("it's a draw")
            document.getElementById("message").textContent = `It's a draw`
            document.getElementById("playerturn").textContent = "Game over";
}

}

function checkDraw(board) {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (board[i][j] === ""){
                return false
            }
        }
    }

    return true
}

function addWinner(str){
    if (str === "X"){
        scoreX++
        updateScoreboard()
    } else if (str === "O"){
        scoreO++
        updateScoreboard()
    }
} 

function updateScoreboard() {
    document.getElementById("scoreX").textContent = scoreX;
    document.getElementById("scoreO").textContent = scoreO;
}
