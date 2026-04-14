let board = [0,0,0,0,0,0,0,0,0];
let player = 1
//console.log(board)


function on_click(event) {
    console.log(board)
    let cell = event.currentTarget
    let cellID = Number(cell.id)

   if (board[cellID] === 0) return

    if (player === 1){
        cell.textContent = "X"
        board[cellID] = 1
        player = 2

    } else if (player === 2){
        cell.textContent = "O"
        board[cellID] = 2
        player = 1
    }
    sumBoard(board)

};
function sumBoard (board) {
        let lines = [
            (board[0]+board[1]+board[2]),
        (board[3]+board[4]+board[5]),
        (board[6]+board[7]+board[8]),
        (board[0]+board[3]+board[6]),
        (board[1]+board[4]+board[7]),
        (board[2]+board[5]+board[8]),
        (board[0]+board[4]+board[8]),
        (board[2]+board[4]+board[6])
    ]

    for (let line of lines){
            if (hasWon(line) === true) {
                break
            }
    }

}

function hasWon (sum) {
    if (sum === 3) {
        console.log ("player 1 has won")
        return true
    } else if (sum === 6) {
        console.log ("player 2 has won")
        return true

    }
    return false
}

// const returnXOrO = (player) =>{
//     if (player === 1) {
//         return "X"
//     } else if (player === 2) {
//         return "O"
//     }
// }
