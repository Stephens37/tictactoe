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
    const winner = document.querySelector('#winner')
    if ((button0.textContent === 'x' && button1.textContent === 'x' && button2.textContent === 'x') ||
    (button3.textContent === 'x' && button4.textContent === 'x' && button5.textContent === 'x') ||
    (button6.textContent === 'x' && button7.textContent === 'x' && button8.textContent === 'x') ||
    (button0.textContent === 'x' && button3.textContent === 'x' && button6.textContent === 'x') ||
    (button1.textContent === 'x' && button4.textContent === 'x' && button7.textContent === 'x') ||
    (button2.textContent === 'x' && button5.textContent === 'x' && button8.textContent === 'x') ||
    (button0.textContent === 'x' && button4.textContent === 'x' && button8.textContent === 'x') ||
    (button2.textContent === 'x' && button4.textContent === 'x' && button6.textContent === 'x')) {
      winner.textContent = 'X wins'
    } else if ((button0.textContent === 'x' && button1.textContent === 'x' && button2.textContent === 'x') ||
    (button3.textContent === 'x' && button4.textContent === 'x' && button5.textContent === 'x') ||
    (button6.textContent === 'x' && button7.textContent === 'x' && button8.textContent === 'x') ||
    (button0.textContent === 'x' && button3.textContent === 'x' && button6.textContent === 'x') ||
    (button1.textContent === 'x' && button4.textContent === 'x' && button7.textContent === 'x') ||
    (button2.textContent === 'x' && button5.textContent === 'x' && button8.textContent === 'x') ||
    (button0.textContent === 'x' && button4.textContent === 'x' && button8.textContent === 'x') ||
    (button2.textContent === 'x' && button4.textContent === 'x' && button6.textContent === 'x')) {
      winner.textContent = 'O wins'
    } else if (board.length === 9 && winner.innerText === '') {
      winner.textContent = 'Tie game'
    }
  })
})()
