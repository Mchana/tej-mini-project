let board = [1,2,3,4,5,6,7,8,9];
let win = false;
console.log(board)


const cell = document.getElementById("id")

const onClick = (cell) =>{

}

const sumBoard = (board) => {
    hasWon(board[0]+board[1]+board[2])
    hasWon(board[3]+board[4]+board[5])
    hasWon(board[6]+board[7]+board[8])
    hasWon(board[0]+board[3]+board[6])
    hasWon(board[1]+board[4]+board[7])
    hasWon(board[2]+board[5]+board[8])
    hasWon(board[0]+board[4]+board[8])
    hasWon(board[2]+board[4]+board[6])
}
// sum columns = 3n

const hasWon = (sum) => {
    if (sum === 3) {
        return true
    } else if (sum === 6) {
        return true

    }
}

const returnXOrO = (turn) =>{
    if (turn === 1) {
        return "X"
    } else if (turn === 2) {
        return "O"
    }
}
