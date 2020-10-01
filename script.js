const display = document.querySelector('.display');
const reset = document.querySelector('.reset-button');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const numberRegex = /^[0-9]*$/;
let expression = {
	left: '',
	operator: '',
	right: ''
}


const resetContent = () =>{
	display.innerText = '0';
}

resetContent();

const checkDecimal = (item) => {
	let currentNumber = display.innerText;
	const hasDecimal = currentNumber.includes('.');
	if(!(hasDecimal && item.innerText == '.')){
		display.textContent = currentNumber + item.innerText;
	}
}

const checkDisplayContents = (item) => {
	const isEmpty = !display.innerText ? true : false; 
	if (isEmpty){
		display.textContent = item.innerText;
	} else {
		//check if there is already a decimal in the innerText
		checkDecimal(item);
	}
}

add.addEventListener('click', function(){
	
})

reset.addEventListener('click', function(){
	resetContent();
})

const numbers = document.querySelectorAll('.num').forEach(item => {
	item.addEventListener('click', function(){
		checkDisplayContents(item);
	})
})