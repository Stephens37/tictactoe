const gameBoard = document.querySelector('.gameboard')
const buttons = document.querySelector('.xobuttons')
let board = [
  buttons.getElementByID('button1'), 'o', 'x',
  'o', 'x', 'o',
  'x', 'o', 'x'
]

function playerXO (player) {
  let playerTurn = 0
  for (playerTurn = 0; playerTurn < 9; playerTurn++) {
    if (playerTurn % 2 === 0) {
      player = 'x'
    } else if (playerTurn % 2 === 1) {
      player = 'o'
    }
  }
  return player
}

const gameFlow = () => {
  const button = document.querySelector('.xobuttons')
  button.addEventListener('click', function (event) {
    const num = parseInt(event.target.dataset.key)
    board.splice(num, 0, playerXO())
  })
}
window.onload = gameFlow()

function gameButtons () {
  for (i = 0; i < board.length; i++) {
    const t = document.createTextNode(board[i])
    let xobuttons = document.querySelector('.xobuttons')
    xobuttons.appendChild(t)
    gameBoard.appendChild(xobuttons)
  }
}
window.onload = gameButtons()
