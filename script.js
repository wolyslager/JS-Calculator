const display = document.querySelector('.display');
const reset = document.querySelector('.reset-button');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const equals = document.querySelector('.equals');
const numberRegex = /^[0-9]*$/;
let currentNumber;

 let state = {
 	left: null,
 	operator: null, 
 	operatorActive:false, 
 	right:0, 
 	currentDisplayedNum: 0,
	currentCalc: 0
}

 const operators = {
 	"+": function(x, y){return x + y},
 	"-": function(x, y){return x - y}, 
 	"*": function(x, y){return x * y},
 	"/": function(x, y){return x / y}
 }

//checking to see if opertor is active to react to number entry
 const checkOperator = (item) => {
 	if (state.operatorActive){
 		display.textContent = item.innerText;
 		state.currentDisplayedNum = display.textContent;
 		state.operatorActive = false;
 	} else {
 		state.currentDisplayedNum = currentNumber + item.innerText;
		display.textContent = state.currentDisplayedNum;
 	}
 }
 
 //ensuring that the user is only able to enter one decimal per number
 const checkDecimal = (item) => {
 	currentNumber = display.innerText;
	const hasDecimal = currentNumber.includes('.');
 	if(!(hasDecimal && item.innerText == '.')){
 			checkOperator(item);
 		}
 }

//checking if it is the first number being entered or not
const checkDisplayContents = (item) => {
 	const isEmpty = display.innerText ==  0 ? true : false; 
 	if (isEmpty){
 		display.textContent = item.innerText;
 	} else {
 		checkDecimal(item);
 	}
 }

//Event listener for all number buttons
 const numbers = document.querySelectorAll('.num').forEach(item => {
	item.addEventListener('click', function(){
		checkDisplayContents(item);
 	})
 })

//Event listeners for all operators
 add.addEventListener('click', function(){
 	if(state.operator){
 		state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
 		state.operator = '+';
 	} else {
 		state.operator = "+";
 		state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
 	}
 	state.operatorActive = true;
 	if(state.left){
 		state.left = state.currentCalc;
 		display.innerText = state.currentCalc;
 	} else {
 		state.left = display.innerText;
 	}
 })

 subtract.addEventListener('click', function(){
 	if(state.operator){
 		state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
 		state.operator = '-';
 	} else {
 		state.operator = "-";
 		state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
 	}
 	state.operatorActive = true;
 	if(state.left){
 		state.left = state.currentCalc;
 		display.innerText = state.currentCalc;
 	} else {
 		state.left = display.innerText;
 	}
 	
 })

 multiply.addEventListener('click', function(){
 	if(state.operator){
 		state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
 		state.operator = '*';
 	} else {
 		state.operator = "*";
 		state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
 	}
 	state.operatorActive = true;
 	if(state.left){
 		state.left = state.currentCalc;
 		display.innerText = state.currentCalc;
 	} else {
 		state.left = display.innerText;
 	}
 })

  divide.addEventListener('click', function(){
 	if(state.operator){
 		state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
 		state.operator = '/';
 	} else {
 		state.operator = "/";
 		state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
 	}
 	state.operatorActive = true;
 	if(state.left){
 		state.left = state.currentCalc;
 		display.innerText = state.currentCalc;
 	} else {
 		state.left = display.innerText;
 	}
 })

  equals.addEventListener('click', function(){
  	state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
	display.innerText = state.currentCalc;
	
  })

  reset.addEventListener('click', function(){
  	state = {
	 	left: null,
	 	operator: null, 
	 	operatorActive:false, 
	 	right:0, 
	 	currentDisplayedNum: 0,
		currentCalc: 0
	}

	display.innerText = 0;
})


