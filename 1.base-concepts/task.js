"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;

  if (d < 0) {
    let root = arr;

  } else if (d === 0) {
    let root0 = -b/(2*a);
    arr.push(root0);

  } else if (d > 0) {
    let root1 = (-b + Math.sqrt(d) )/(2*a);
    let root2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(root1);
    arr.push(root2);
}
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/100; 
  let p = percent/12;
  let sum = ((amount-contribution) * (p + (p / (((1 + p)**countMonths) - 1))))*countMonths;
  
  sum = sum.toFixed(2);
  sum = parseFloat(sum);

  return sum;
}