const gameBoard = document.querySelector('.gameboard')

const board = [
  'x', 'o', 'x',
  'o', 'x', 'o',
  'x', 'o', 'x'
]

function gameButtons () {
  for (i = 0; i < board.length; i++) {
    const xobuttons = document.createElement('button')
    xobuttons.classList.add('xobuttons')
    const t = document.createTextNode(board[i])
    xobuttons.appendChild(t)
    gameBoard.appendChild(xobuttons)
  }
}
window.onload = gameButtons()

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
