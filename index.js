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
let cheesePerTurn = 0

let totalPickaxe = 0
let totalJackhammer = 0
let totalCheeseMiner = 0
let totalCheeseMiningFacility = 0

let totalClickMiningBonus = 0
let totalPickaxeMiningBonus = 0
let totalJackhammerMiningBonus = 0
let totalAutoMiningBonus = 0
let totalCheeseMinerMiningBonus = 0
let totalCheeseMiningFacilityMiningBonus = 0

drawCheeseStats()
drawClickStats()
drawAutoStats()


function mineCheese() {
  totalCheese += cheesePerClick
  //console.log(`${totalCheese}`)

  drawCheeseStats()

}


function drawCheeseStats() {
  let cheeseElm = document.getElementById(`cheeseCard`)

  let totalCheeseElm = cheeseElm.querySelector('.cheeseTotal')
  totalCheeseElm.innerHTML = `<span>Cheese Total: ${totalCheese}</span>`

  let cheesePerClickElm = cheeseElm.querySelector('.cheeseClick')
  cheesePerClickElm.innerHTML = `<span>Cheese per click: ${cheesePerClick}</span>`

  let cheesePerTurnElm = cheeseElm.querySelector('.cheesePerTurn')
  cheesePerTurnElm.innerHTML = `<span>Cheese per turn: ${cheesePerTurn}</span>`
}


function drawClickStats() {
  let clickStatsElm = document.getElementById(`clickStats`)

  let totalPickaxeElm = clickStatsElm.querySelector('.totalPickaxe')
  totalPickaxeElm.innerHTML = `<span>${totalPickaxe} x Pickaxe +${totalPickaxeMiningBonus}</span>`

  let totaljackhammerElm = clickStatsElm.querySelector('.totalJackhammer')
  totaljackhammerElm.innerHTML = `<span> ${totalJackhammer} x Jackhammer +${totalJackhammerMiningBonus}</span>`
}


function drawAutoStats() {
  let autoStatsElm = document.getElementById(`autoStats`)

  let totalCheeseMinerElm = autoStatsElm.querySelector('.totalCheeseMiner')
  totalCheeseMinerElm.innerHTML = `<span>${totalCheeseMiner} x Cheese Miner +${totalCheeseMinerMiningBonus}</span>`

  let totalCheeseMiningFacilityElm = autoStatsElm.querySelector('.totalCheeseMiningFacility')
  totalCheeseMiningFacilityElm.innerHTML = `<span> ${totalCheeseMiningFacility} x Cheese Mining Facility +${totalCheeseMiningFacilityMiningBonus}</span>`
}


function clickShoppingCart(bonusItemName) {
  let totalClickMiningBonusName = clickUpgrade.find((item) => item.name == bonusItemName)

  let totalClickMiningBonusPrice = totalClickMiningBonusName.price

  console.log("Successful Click", `${bonusItemName}`, `${totalClickMiningBonusPrice}`)

  if (totalCheese >= totalClickMiningBonusPrice) {
    console.log("Purchased", `${bonusItemName}`, `${totalClickMiningBonusPrice}`)
    totalCheese -= totalClickMiningBonusPrice
    console.log("Total Cheese: ", `${totalCheese}`)
    drawCheeseStats()

    if (bonusItemName == 'Pickaxe') {
      totalPickaxe++
      totalPickaxeMiningBonus = totalPickaxe * 1

      drawClickStats()
      calculateCheesePerClick()
    } else {

      totalJackhammer++
      totalJackhammerMiningBonus = totalJackhammer * 3

      drawClickStats()
      calculateCheesePerClick()
    }

  } else {
    console.log("You don't have enough cheese!")
  }

  console.log("Total Pickaxes: ", `${totalPickaxe}`, " Total Jackhammers: ", `${totalJackhammer}`)
}



function calculateCheesePerClick() {
  cheesePerClick = totalPickaxeMiningBonus + totalJackhammerMiningBonus + 1

  drawCheeseStats()

}


function autoShoppingCart(bonusItemName) {
  let totalAutoMiningBonusName = automaticUpgrade.find((item) => item.name == bonusItemName)

  let totalAutoMiningBonusPrice = totalAutoMiningBonusName.price

  console.log("Successful Click", `${bonusItemName}`, `${totalAutoMiningBonusPrice}`)

  if (totalCheese >= totalAutoMiningBonusPrice) {
    console.log("Purchased", `${bonusItemName}`, `${totalAutoMiningBonusPrice}`)
    totalCheese -= totalAutoMiningBonusPrice
    console.log("Total Cheese: ", `${totalCheese}`)
    drawCheeseStats()

    if (bonusItemName == 'Cheese Miner') {
      totalCheeseMiner++
      totalCheeseMinerMiningBonus = totalCheeseMiner * 7

      drawAutoStats()
      calculateCheesePerTurn()
    } else {

      totalCheeseMiningFacility++
      totalCheeseMiningFacilityMiningBonus = totalCheeseMiningFacility * 15
      drawAutoStats()
      calculateCheesePerTurn()
    }

  } else {
    console.log("You don't have enough cheese!")
  }

  console.log("Total Cheese Miner: ", `${totalCheeseMiner}`, " Total Cheese Mining Facility: ", `${totalCheeseMiningFacility}`)
}

function calculateCheesePerTurn() {

  cheesePerTurn = totalCheeseMinerMiningBonus + totalCheeseMiningFacilityMiningBonus

  drawCheeseStats()
}



function reset() {
  totalCheese = 0
  cheesePerClick = 1

  drawCheeseStats()
}