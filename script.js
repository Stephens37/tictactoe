const gameBoard = document.querySelector('.gameboard')
const buttons = document.querySelector('.xobuttons')
let board = []

const playerXO = () => {
  let player = ''
  for (i = 0; i < board.length; ++i) {
    if (i % 2 === 0) {
      player = 'x'
    } else if (i % 2 === 1) {
      player = 'o'
    }
  }
  return player
}

const gameFlow = () => {
  const button = document.querySelector('.gameboard')
  button.addEventListener('click', function (event) {
    const num = event.target.textContent
    board.splice(num, 0, playerXO())
    event.target.textContent = playerXO()
    console.log(playerXO())
    event.target.disabled = true
  })
}
window.onload = gameFlow()

const gameButtons = (() => {
  for (i = 0; i < board.length; i++) {
    const t = document.createTextNode(board[i])
    let xobuttons = document.querySelector('.xobuttons')
    xobuttons.appendChild(t)
    gameBoard.appendChild(xobuttons)
  }
})()
