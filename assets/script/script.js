const price = document.getElementById('price');
const cash = document.getElementById('cash');
let cid = document.getElementById('cid');
let display = document.getElementById('output');


function checkCashRegister() {
   let balance = cash - price;
  for(let i = 0; i <= cid.length; i++) {
    if(balance - cid[i].value) {
      balance -= cid[i].value
    }
  }
  return balance
}