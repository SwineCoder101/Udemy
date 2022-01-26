let bill = prompt('enter your bill value here');

let tip = bill >= 50 && bill <= 300 ? 0.15 : 0.30;
console.log(`Your tip is ${tip} with the bill ${bill} and the total is ${(tip * Number(bill)) + Number(bill)}`);