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

 const checkOperator = (item) => {
 	//if there is an operator active, clear the screen for the upcoming number
 	if (state.operatorActive){
 		display.textContent = item.innerText;
 		state.currentDisplayedNum = display.textContent;
 		state.operatorActive = false;
 	} else {
 		state.currentDisplayedNum = currentNumber + item.innerText;
		display.textContent = state.currentDisplayedNum;
 	}
 }
 
 const checkDecimal = (item) => {
 	currentNumber = display.innerText;
	const hasDecimal = currentNumber.includes('.');
 	if(!(hasDecimal && item.innerText == '.')){
 			checkOperator(item);
 		}
 }

const checkDisplayContents = (item) => {
 	const isEmpty = display.innerText ==  0 ? true : false; 
 	if (isEmpty){
 		display.textContent = item.innerText;
 	} else {
 		checkDecimal(item);
 	}
 }

 const numbers = document.querySelectorAll('.num').forEach(item => {
	item.addEventListener('click', function(){
		checkDisplayContents(item);
 	})
 })


 add.addEventListener('click', function(){
 	//case: there is already a state.left.. if there is then we have to 
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
 	console.log(state.currentCalc);
 	console.log(state);
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
 	console.log(state.currentCalc);
 	console.log(state)
 	
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
 	console.log(state.currentCalc);
 	console.log(state)
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
 	console.log(state.currentCalc);
 	console.log(state)
 })

  equals.addEventListener('click', function(){
  	state.currentCalc = operators[state.operator](Number(state.left), Number(state.currentDisplayedNum));
	display.innerText = state.currentCalc;
	
  })


