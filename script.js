const gameBoard = document.querySelector('.gameboard')
const buttons = document.querySelector('.xobuttons')
let board = [
  '', '', '',
  '', '', '',
  '', '', ''
]

const playerXO = () => {
  let player = ''
  for (i = 0; i < 9; i++) {
    if (i % 2 === 0) {
      player = 'x'
    } else if (i % 2 === 1) {
      player = 'o'
    }
  }
  return player
}

const gameFlow = () => {
  const button = document.querySelector('.xobuttons')
  const igrok = playerXO()
  button.addEventListener('click', function (event) {
    playerXO()
    const num = event.target.textContent
    board.splice(num, 0, igrok)
    event.target.textContent = igrok
    console.log(igrok)
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
