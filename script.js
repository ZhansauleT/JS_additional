let num = 266219;
let digits = num.toString().split('').map(Number);
let result = 1;

for(let i = 0; i < digits.length; i++){
  result *= digits[i];
}

console.log(result);

result = result ** 3;
let result_digits = result.toString().split('').map(Number);

console.log(result_digits[0]);
console.log(result_digits[1]);