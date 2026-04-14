let board = ["0","0","0","0","0","0","0","0","0"];
let player = 1
let gameover = false

//console.log(board)


function on_click(event) {
    if (gameover === true) return;
    //console.log(board)
    let cell = event.currentTarget
    let cellID = Number(cell.id)

    if (board[cellID] !== 0) return

    if (player === 1){
        cell.textContent = "X"
        board[cellID] = "X"
        player = 2

    } else if (player === 2){
        cell.textContent = "O"
        board[cellID] = "O"
        player = 1
    }
    checkBoard(board)

};
