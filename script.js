const gameBoard = document.querySelector('.gameboard')

const board = [
  'x', 'o', 'x',
  'o', 'x', 'o',
  'x', 'o', 'x'
]

const gameFlow = (player) => {
  const getPlayerTurn = (playerTurn) => {
    for (playerTurn = 1; playerTurn < board.length; playerTurn++) {
      if (playerTurn % 2 === 0) {
        player = 'o'
        this.document.querySelector('.xobuttons').nodeValue = 'o'
      } else {
        player = 'x'
        this.document.querySelector('.xobuttons').nodeValue = 'x'
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
