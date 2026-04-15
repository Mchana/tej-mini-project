let board =[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let player = 1
let gameover = false

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
        board[row][col] = "X"
        player = 2

    } else if (player === 2){
        cell.textContent = "O"
        board[row][col] = "O"
        player = 1
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
        }
    }
// column check
    for (let i = 0; i < 3; i++){
        if (board[0][i] !== "" &&
            board[0][i] === board[1][i] && 
            board[1][i] === board[2][i]){
            gameover = true
            console.log(`${board[0][i]} is the winner`)
        }
    }

//diagonal check
        if (board[0][0] !== "" &&
            board[0][0] === board[1][1] && 
            board[1][1] === board[2][2]) {
        gameover = true
        console.log(`${board[1][1]} is the winner`)

    }
    if (board[0][2] !== "" &&
        board[0][2] === board[1][1] && 
        board[1][1] === board[2][0]) {
        gameover = true
        console.log(`${board[1][1]} is the winner`)
    }
//full board check for draw
}

function checkDraw(board) {
    let draw = false

    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (board[i][j] === ""){
                draw = false
            }
        }
    }
}
