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
        let button = document.querySelector('.xobuttons')
        button.addEventListener('click', function (event) {
          let num = parseInt(event.target.dataset.key)
          board.splice(num, 0, 'x')
          const t = document.createTextNode(board[i])
          button.appendChild(t)
          gameBoard.appendChild(button)
        })
      } else {
        let button = document.querySelector('.xobuttons')
        button.addEventListener('click', function (event) {
          let num = parseInt(event.target.dataset.key)
          board.splice(num, 0, 'o')
          const t = document.createTextNode(board[i])
          button.appendChild(t)
          gameBoard.appendChild(button)
        })
      }
    }
  }
  getPlayerTurn()
}
gameFlow()

 /* function gameButtons () {
  for (i = 0; i < board.length; i++) {
    const t = document.createTextNode(board[i])
    xobuttons.appendChild(t)
    gameBoard.appendChild(xobuttons)
    xobuttons.addEventListener('click', gameFlow)
  }
}
window.onload = gameButtons() 

 document.addEventListener('click', function (event) {
  let num = parseInt(event.target.dataset.key)
  board.splice(num, 0, 'x')
}) */
