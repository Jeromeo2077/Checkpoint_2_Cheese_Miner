let clickUpgrade = [
  {
    name: 'Pickaxe',
    price: 100,
    quantity: 0,
    bonus: 1
  },

  {
    name: 'Jackhammer',
    price: 200,
    quantity: 0,
    bonus: 3
  }
];

let automaticUpgrade = [
  {
    name: 'Cheese Miner',
    price: 400,
    quantity: 0,
    bonus: 7
  },
  {
    name: 'Cheese Mining Facility',
    price: 800,
    quantity: 0,
    bonus: 15
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