const gameBoard = (() => {
  const rows = 3
  const columns = 3
  const board = []

  for (let i = 0; i < rows; i++) {
    board[i] = []
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell())
    }
  }

  const getBoard = () => board

  const printBoard = (() => {
    const boardWithSquareValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithSquareValues)
  })()
  return { getBoard, printBoard }
})()

function Cell () {
  let value = ''
  const addMark = (player) => {
    value = player
  }
  const printCells = (cell) => {
    cell = document.createElement('button')
    cell.className = 'cell'
    cell.append(document.getElementsByClassName('gameboard'))
    return cell
  }

  const getValue = () => value

  return {
    addMark,
    getValue,
    printCells
  }
}

const gameFlow = (board, player) => {
  const getPlayerTurn = ((playerTurn) => {
    for (playerTurn = 1; playerTurn < board.length; playerTurn++) {
      if (playerTurn % 2 === 0) {
        player = 'o'
        document.getElementByClass('turn').innerHTML = "O's turn"
      }
      else {
        player = 'x'
        document.getElementByClass('turn').innerHTML = "X's turn"
      }
    }
  })()


  return { getPlayerTurn }
}

/* const player = () => {
  
}

const gameFlow = (() => {

}) */