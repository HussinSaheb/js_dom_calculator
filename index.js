var number_1, number_2, operator;

// retrieve the screen and save as variable
var screen = document.getElementById('screen');
// retrieve all the buttons
var buttons = document.getElementsByClassName("buttonNum");
// retriece the clear button
var ac = document.getElementById('clear');

//loop over all buttonNums and add event listener to each
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    // if the screen has the sparta logo replace it by number clicked
    if (screen.innerHTML == "Sparta Calculator") {
      screen.innerHTML = this.innerHTML;
    }else{
      // else concat to it.
      screen.innerHTML += this.innerHTML;
    }
  });
};
// retrieve array of operators
var operators = document.getElementsByClassName("operator");
// loop over the operators
for (var i = 0; i < operators.length; i++) {
// add addEventListener for each
  operators[i].addEventListener("click", function(){
    // when its pressed
    //value at screen is number 1
    number_1 = screen.innerHTML;
    // operator is the button presed
    operator = this.innerHTML;
    // clear display from value to capture number 2
    screen.innerHTML = "0";
  });
}


//retrieve the equals
var equals = document.getElementById('equals');
equals.addEventListener('click', function(){
  // when equals is pressed get number 2
  number_2 = screen.innerHTML;
  // all parameters have been collected. use funciton and save value
  var result = calculation(parseFloat(number_1), operator, parseFloat(number_2));
  // display the result to screen.
  screen.innerHTML = result;
});


// add click listener to clear calc
ac.addEventListener("click", function(){
  // clearing is basically removing all the
  number_1,number_2, operator = "";
  screen.innerHTML = "0";
});
