const gameBoard = document.querySelector('.gameboard')

const board = [
  'x', 'o', 'x',
  'o', 'x', 'o',
  'x', 'o', 'x'
]

const gameFlow = () => {
  const getPlayerTurn = () => {
    for (i = 0; i < board.length; i++) {
      if (i % 2 === 0) {
        this.indexOf(board) = 'o'
      } else {
        this.indexOf(board) = 'x'
      }
    }
  }
  return { getPlayerTurn }
}

function gameButtons () {
  for (i = 0; i < board.length; i++) {
    const xobuttons = document.createElement('button')
    xobuttons.classList.add('xobuttons')
    const t = document.createTextNode(board[i])
    xobuttons.appendChild(t)
    gameBoard.appendChild(xobuttons)
    xobuttons.addEventListener('click', gameFlow)
  }
}
window.onload = gameButtons()
