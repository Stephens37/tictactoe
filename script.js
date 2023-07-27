
const gameBoard = (() => {
  const boardButtons = (button) => {
    for (i = 0; i < 9; i++) {
      button = document.createElement('button')
      button.innerHTML = 'x'
      button.classList.add('button')
      document.getElementsByClassName('gameboard').append(button)
    }
  }

  const getBoard = () => boardButtons
  return { gameBoard, getBoard }
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