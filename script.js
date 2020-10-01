const display = document.querySelector('.display');
const reset = document.querySelector('.reset-button');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const equals = document.querySelector('.equals');
const numberRegex = /^[0-9]*$/;
let operatorJustClicked = false;
let currentNumber;

let expression = {
	left: null,
	operator: null, 
	right:null
}

const operators = {
	"+": function(x, y){return x + y}
}

const resetContent = () =>{
	display.innerText = '0';
	expression.left = null;
	expression.operator = null;
	expression.right = null;
}

resetContent();

const checkDecimal = (item) => {
	currentNumber = display.innerText;
	const hasDecimal = currentNumber.includes('.');
	//if not(there is a decimal and the entered text is a decimal)
	if(!(hasDecimal && item.innerText == '.')){
		//if there is already a number entered, as well as an operator, clear the way for the second number
		if (operatorJustClicked){
			currentNumber = item.innerText;
			display.textContent = currentNumber;
			operatorJustClicked = false;
		} else {
			currentNumber = currentNumber + item.innerText;
			display.textContent = currentNumber;
		}
	}
}

const checkDisplayContents = (item) => {
	const isEmpty = display.innerText == '0' ? true : false; 
	if (isEmpty){
		display.textContent = item.innerText;
	} else {
		//check if there is already a decimal in the innerText
		checkDecimal(item);
	}
}

add.addEventListener('click', function(){
	//if there is already a number on the left and the add button is pressed 
	if(expression.left){
		display.textContent = Number(expression.left) + Number(currentNumber);
	}
	expression.operator = '+';
	expression.left = display.innerText;
	operatorJustClicked = true;
})

equals.addEventListener('click', function(){
	//check if there is a left hand side to the expression
	if (expression.left){
		expression.right = display.innerText;
	}
	let left = Number(expression.left);
	let right = Number(expression.right);
	display.textContent = operators[expression.operator](left, right);
	
})

reset.addEventListener('click', function(){
	resetContent();
})

const numbers = document.querySelectorAll('.num').forEach(item => {
	item.addEventListener('click', function(){
		checkDisplayContents(item);
	})
})