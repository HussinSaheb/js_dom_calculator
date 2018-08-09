// add two numbers
function addTwoNumbers(number_1, number_2) {
  return number_1 + number_2;
}
// subtract two numbers
function subtractTwoNumbers(number_1, number_2) {
  return number_1 - number_2;
}
// multiply two numbers
function multiplyTwoNumbers(number_1, number_2) {
  return number_1 * number_2;
}
// divide two numbers
function divideTwoNumbers(number_1, number_2) {
  return number_1 / number_2;
}
//create function to do the calculation depending on operation
function calculation(number_1,operation, number_2) {
switch (operation) {
  case "+":
  return addTwoNumbers(number_1,number_2);
  break;
  case "-":
  return subtractTwoNumbers(number_1,number_2);
  break;
  case "*":
  return multiplyTwoNumbers(number_1,number_2);
  break;
  case "/":
  return divideTwoNumbers(number_1,number_2);
  break;
  default:
}
}
//exported functions for jasmine testing
module.exports = {
addTwoNumbers:addTwoNumbers,
subtractTwoNumbers:subtractTwoNumbers,
multiplyTwoNumbers:multiplyTwoNumbers,
divideTwoNumbers:divideTwoNumbers,
calculation:calculation
};
