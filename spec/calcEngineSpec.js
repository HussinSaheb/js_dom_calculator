  var calculator = require("../calcFunctions");

describe("Basic 2 number calc", function(){

  it("should add two numbers together", function(){
    expect(calculator.addTwoNumbers(10,5)).toEqual(15);
  })
  it("should subtract two numbers together", function(){
    expect(calculator.subtractTwoNumbers(50,10)).toEqual(40);
  })
  it("should subtrat two numbers together", function(){
    expect(calculator.multiplyTwoNumbers(5,4)).toEqual(20);
  })
  it("should subtract two numbers together", function(){
    expect(calculator.divideTwoNumbers(15,5)).toEqual(3);
  })

});
// testing the calculation function
describe("calculator Function", function(){
  //testing the + as input for method
  it("should add two numbers together", function(){
    expect(calculator.calculation(1,"+",1)).toEqual(2);
  })
  //testing the - as input for method
  it("should subtract two numbers together", function(){
    expect(calculator.calculation(1,"-",1)).toEqual(0);
  })
  //testing the * as input for method
  it("should subtrat two numbers together", function(){
    expect(calculator.calculation(1,"*",1)).toEqual(1);
  })
  //testing the / as input for method
  it("should subtract two numbers together", function(){
    expect(calculator.calculation(1,"/",1)).toEqual(1);
  })

});
