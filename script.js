const gameBoard = (() => {
  const boardArray = []
  return boardArray
})()

const player = (suit, who) => {
  const getSuit = () => suit
  const getWho = () => who
  return {getSuit, getWho}
}

const displayController = ((controller, enemy) => {
  if(document.getElementById("x") = true) {
    controller = player.getSuit("x")
    enemy = player.getSuit("y")
  }
  else if (document.getElementById("o") = true) {
    controller = player.getSuit("o")
    enemy = player.getSuit("x")
  }
return {controller, enemy}
})()
  // if player chooses x then player will equal const x and computer will equal const o
  // else player equals 
  /*const whichPlayer = (controller, enemy) => 
  if x is pressed {
    player(x, controller)
    player(o, enemy)
    else
    player(o, controller)
    player(x, enemy)
  }
  return {controller, enemy}
})()
