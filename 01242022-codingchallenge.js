/*A number is said to be Disarium if the sum of its 'digits raised to 
their respective positions' is the number itself.
Create a function that determines whether a number is a Disarium or not.
Examples:
isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32
isDisarium(135) ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
isDisarium(518) ➞ false
isDisarium(518) ➞ true
isDisarium(544) ➞ false
isDisarium(8) ➞ true
isDisarium(466) ➞ false
*/
function isDisarium(num){
  let test = 0;
  num += '';
  for(let i = 0; i < num.length; i++){
    test += (Math.pow(num[i], (i + 1) ));
  }
   return test==num;
}

console.log("isDisarium(75) false: "+ isDisarium(75));
console.log("isDisarium(135) true: " +isDisarium(135));
console.log("isDisarium(518) true: "+ isDisarium(518));
console.log("isDisarium(544) false:  "+ isDisarium(544));
console.log("isDisarium(8) true: " + isDisarium(8));
console.log("isDisarium(466) false:  " +isDisarium(466));

