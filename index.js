let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

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
let totalBalance;
let count = 0


function checkCID(cash, blc){
  let balance = cash - blc
  for(let i=0; i <cid.length ; i++){
    if(cid[i][1] > 0) {
      if((balance - currency[i]) >= 0 ){
        count += 1
      }
    }
  }
}

console.log(checkCID(30000, 2400))