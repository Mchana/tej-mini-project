let board = [0,0,0,0,0,0,0,0,0];
let player = 1
//console.log(board)


function on_click(event) {
    let cell = event.target
    let cellID = Number(event.target.id)

    if (board[cellID] !==0) return;

    if (player === 1 && board[cellID] === 0){
        cell.textContent = "X"
        board[cellID] = 1
        player = 2

    } else if (player === 2 && board[cellID] === 0){
        cell.textContent = "O"
        board[cellID] = 2
        player = 1
    }
    sumBoard(board)

};
function sumBoard (board) {
    hasWon(board[0]+board[1]+board[2])
    hasWon(board[3]+board[4]+board[5])
    hasWon(board[6]+board[7]+board[8])
    hasWon(board[0]+board[3]+board[6])
    hasWon(board[1]+board[4]+board[7])
    hasWon(board[2]+board[5]+board[8])
    hasWon(board[0]+board[4]+board[8])
    hasWon(board[2]+board[4]+board[6])
}

function hasWon (sum) {
    if (sum === 3) {
        console.log ("player 1 has won")
    } else if (sum === 6) {
        console.log ("player 2 has won")

    }
}

// const returnXOrO = (player) =>{
//     if (player === 1) {
//         return "X"
//     } else if (player === 2) {
//         return "O"
//     }
// }
