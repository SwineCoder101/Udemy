console.log("Your code goes here!");

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  return showResult ? n1 + n2 : console.log(phrase, n1 + n2);
}

let n1 = 5;
const n2 = 2.8;
const printResult = false;
let phrase = "result is: ";
phrase = 5;

const result = add(n1, n2, printResult, phrase);

console.log(result);
