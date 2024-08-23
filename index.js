let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    bonus: 1
  }
];

let automaticUpgrades = [
  {
    name: 'rover',
    price: 600,
    quantity: 0,
    bonus: 20
  }
];


let totalCheese = 0
let cheesePerClick = 1

drawCheeseStats()


function mineCheese() {
  totalCheese++
  //console.log(`${totalCheese}`)

  drawCheeseStats()
}

function drawCheeseStats() {
  let cheeseElm = document.getElementById(`cheeseCard`)

  let totalCheeseElm = cheeseElm.querySelector('.cheeseTotal')
  totalCheeseElm.innerHTML = `<span>Cheese Total: ${totalCheese}</span>`

  let cheesePerClickElm = cheeseElm.querySelector('.cheeseClick')
  cheesePerClickElm.innerHTML = `<span>Cheese per click: ${cheesePerClick}</span>`

}

reset(){
  let totalCheese = 0
  let cheesePerClick = 1
}