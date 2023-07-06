const price = document.getElementById('price')
const cash = document.getElementById('cash')
const form = document.getElementById('cash-register')
const display = document.getElementById('output') 
const oneHundred = document.getElementById('one-hundred')
const twenty = document.getElementById('twenty')
const ten = document.getElementById('ten')
const five = document.getElementById('five')
const one = document.getElementById('one')
const quarter = document.getElementById('quarter')
const dime = document.getElementById('dime')
const nickel = document.getElementById('nickel')
const penny = document.getElementById('penny')
const btnElement = document.getElementById('refund')


function checkCashRegister(price, cash, cid) {
  // Variable declarations
  const currency = [
    { name: 'ONE HUNDRED', val: 100.0 },
    { name: 'TWENTY', val: 20.0 },
    { name: 'TEN', val: 10.0 },
    { name: 'FIVE', val: 5.0 },
    { name: 'ONE', val: 1.0 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.1 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 }
  ]
  const cashInRegister = {}
  let cashTotalAmount = 0
  let returnAmount = Math.round((cash - price) * 100) / 100
  const result = { status: '', change: [] }

  // Make an object from cid array
  cid.forEach((element) => {
    cashInRegister[element[0]] = element[1]
    cashTotalAmount += element[1]
  })

  // If the amount of money in register is smaller than the return amount, display INSUFFICIENT FUNDS
  if (returnAmount > cashTotalAmount) {
    result.status = 'INSUFFICIENT_FUNDS'
    result.change = []
  } else if (returnAmount === cashTotalAmount) {
    // If the amount of money in register is equal to the return amount, display CLOSED;
    result.status = 'CLOSED'
    result.change = cid
  } else {
    // Else cycle throught the currency array and make a new array of returned money values
    currency.forEach((element) => {
      let amount = 0
      while (
        returnAmount >= element.val &&
        cashInRegister[element.name] >= element.val
      ) {
        returnAmount -= element.val
        cashInRegister[element.name] -= element.val
        amount += element.val
        returnAmount = Math.round(returnAmount * 100) / 100
      }
      if (amount > 0) {
        result.change.push([element.name, amount])
      }
    })

    // If we returned everything display OPEN, else INSUFFICIENT FUNDS
    if (returnAmount === 0) {
      result.status = 'OPEN'
    } else {
      result.status = 'INSUFFICIENT_FUNDS'
      result.change = []
    }
  }

  console.log(result)
  display.innerHTML = `${result.status} // ${result.change}`
  return result
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const registerArray = [
    ['ONE HUNDRED', oneHundred.value],
    ['TWENTY', twenty.value],
    ['TEN', ten.value],
    ['FIVE', five.value],
    ['ONE', one.value],
    ['QUARTER', quarter.value],
    ['DIME', dime.value],
    ['NICKEL', nickel.value],
    ['PENNY', penny.value]
  ]

  checkCashRegister(price.value, cash.value, registerArray)
  console.log(registerArray)
})



// const cashAmount = []
// let cid = [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]


// function checkCashInRegister(price, cash, cid){
//   let change = cash - price 
//   let cidTotal = 0
//   for(let elem of cid ){
//     cidTotal += elem[1]
//   }
//   if(change > cidTotal) {
//     return { status: "Insufficient Funds", change: []}
//   } else if (change === cidTotal){
//     return {status: "CLOSED", change: cid}
//   } else  {
//     let result = [] 
//     cid = cid.reverse()
//     // console.log(cid)
//     let currencyUnit = {
//       "ONE HUNDRED": 100,
//       "TWENTY": 20,
//       "TEN": 10,
//       "FIVE": 5,
//       "ONE": 1,
//       "QUARTER": 0.25,
//       "DIME": 0.1,
//       "NICKEL": 0.05,
//       "PENNY": 0.01 
//     }
//     for(let elem of cid){
//       let moneyHolder = [elem[0], 0]

//       elem[1] = elem[1]
//       while (change >= currencyUnit[elem] && elem[1] > 0){
//         console.log(elem[1])
//         change -= currencyUnit[elem[0]]
//         elem[1] -= currencyUnit[elem[1]]
//         moneyHolder += currencyUnit[elem[0]]
//       }
//       if(moneyHolder[1] > 0){
//         result.push(moneyHolder)

//       }
//     }
//     if(change > 0) {
//       return { status: "Insufficient Funds", change: [] }
//     }
//   }
// }



// btnElement.addEventListener('click', ()=>{
//   cid.forEach(element => {
//     if(element === money.name)
//   })
// })

