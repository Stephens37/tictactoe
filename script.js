const button0 = document.querySelector('#button0')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')
const button5 = document.querySelector('#button5')
const button6 = document.querySelector('#button6')
const button7 = document.querySelector('#button7')
const button8 = document.querySelector('#button8')

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
    const bottomGrid = document.querySelector('#bottom_grid')
    const winner = document.createElement('div')
    winner.setAttribute('id', 'winner')
    bottomGrid.append(winner)

    const afterWin = () => {
      const xobuttons = document.querySelectorAll('.xobuttons')
      for (let i = 0; i < xobuttons.length; i++) {
        xobuttons[i].disabled = true
      }
      const resetButton = document.createElement('button')
      resetButton.setAttribute('id', 'reset_button')
      resetButton.innerText = 'Reset'
      resetButton.style.textAlign = 'center'
      bottomGrid.append(resetButton)
      resetButton.addEventListener('click', function () {
        winner.remove()
        resetButton.remove()
        for (let i = 0; i < xobuttons.length; i++) {
          xobuttons[i].disabled = false
        }
        board.length = 0
        const buttonTextReset = (() => {
          button0.textContent = ''
          button1.textContent = ''
          button2.textContent = ''
          button3.textContent = ''
          button4.textContent = ''
          button5.textContent = ''
          button6.textContent = ''
          button7.textContent = ''
          button8.textContent = ''
        })()
        return buttonTextReset
      })
    }

    const winFunction = (() => {
      if ((button0.textContent === 'x' && button1.textContent === 'x' && button2.textContent === 'x') ||
      (button3.textContent === 'x' && button4.textContent === 'x' && button5.textContent === 'x') ||
      (button6.textContent === 'x' && button7.textContent === 'x' && button8.textContent === 'x') ||
      (button0.textContent === 'x' && button3.textContent === 'x' && button6.textContent === 'x') ||
      (button1.textContent === 'x' && button4.textContent === 'x' && button7.textContent === 'x') ||
      (button2.textContent === 'x' && button5.textContent === 'x' && button8.textContent === 'x') ||
      (button0.textContent === 'x' && button4.textContent === 'x' && button8.textContent === 'x') ||
      (button2.textContent === 'x' && button4.textContent === 'x' && button6.textContent === 'x')) {
        winner.textContent = 'X wins'
        afterWin()
      } else if ((button0.textContent === 'o' && button1.textContent === 'o' && button2.textContent === 'o') ||
      (button3.textContent === 'o' && button4.textContent === 'o' && button5.textContent === 'o') ||
      (button6.textContent === 'o' && button7.textContent === 'o' && button8.textContent === 'o') ||
      (button0.textContent === 'o' && button3.textContent === 'o' && button6.textContent === 'o') ||
      (button1.textContent === 'o' && button4.textContent === 'o' && button7.textContent === 'o') ||
      (button2.textContent === 'o' && button5.textContent === 'o' && button8.textContent === 'o') ||
      (button0.textContent === 'o' && button4.textContent === 'o' && button8.textContent === 'o') ||
      (button2.textContent === 'o' && button4.textContent === 'o' && button6.textContent === 'o')) {
        winner.textContent = 'O wins'
        afterWin()
      } else if (board.length === 9) {
        winner.textContent = 'Tie game'
        afterWin()
      }
    })()
  })
})()
