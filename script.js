const xChoice = document.getElementById('x_choice')
const oChoice = document.getElementById('o_choice')

const player = (playerChoice) => {
  if (xChoice === true) {
    playerChoice.innerHTML = 'x'
  } else if (oChoice === true) {
    playerChoice.innerHTML = 'o'
  }
  return playerChoice
}

xChoice.addEventListener(onclick, player)
oChoice.addEventListener(onclick, player)

const enemy = (enemyChoice, controller) => {
  if (controller.innerHTML === 'x') {
    enemyChoice.innerHTML = 'o'
  } else if (controller.innerHTML === 'o') {
    enemyChoice.innerHTML = 'x'
  }
  return enemyChoice
}

xChoice.addEventListener(onclick, enemy)
oChoice.addEventListener(onclick, enemy)

const gameBoard = (() => {
  const boardArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
  const square = document.getElementsByClassName('square')
  return { boardArray, square }
})()

// if player chooses x then player will equal const x and computer will equal const o
// else player equals 
/* const whichPlayer = (controller, enemy) => 
if x is pressed {
  player(x, controller)
  player(o, enemy)
  else
  player(o, controller)
  player(x, enemy)
}
return {controller, enemy}
})() */
