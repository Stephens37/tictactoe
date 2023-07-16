const gameBoard = (() => {
  const boardArray = []
  return boardArray
})()

const player = (suit, who) => {
  const getSuit = () => suit
  const getWho = () => who
  return {getSuit, getWho}
}

const xChoice = document.getElementById('x_choice')
const oChoice = document.getElementById('o_choice')

const playerChoice = ((controller, enemy) => {
  if (xChoice === true) {
    controller = player.getSuit('x')
    enemy = player.getSuit('y')
  } else if (oChoice === true) {
    controller = player.getSuit('o')
    enemy = player.getSuit('x')
  }
  console.log(controller)
  return { controller, enemy }
})

xChoice.addEventListener(onclick, playerChoice)
oChoice.addEventListener(onclick, playerChoice)

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
