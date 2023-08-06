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

const gameFlow = (() => {
  const button = document.querySelector('.gameboard')
  button.addEventListener('click', function (event) {
    board.push(playerXO())
    event.target.textContent = playerXO()
    console.log(playerXO())
    event.target.disabled = true
  })
})()
