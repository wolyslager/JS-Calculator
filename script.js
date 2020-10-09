const display = document.querySelector(".display");
const reset = document.querySelector(".reset-button");
const numberRegex = /^[0-9]*$/;

let state = {
	left: null,
	operator: null,
	operatorActive: false,
	right: 0,
	currentDisplayedNum: 0,
	currentCalc: 0,
};

const operators = {
	"+": function (x, y) {
		return x + y;
	},
	"-": function (x, y) {
		return x - y;
	},
	x: function (x, y) {
		return x * y;
	},
	"/": function (x, y) {
		return x / y;
	},
};

//checking to see if opertor is active to react to number entry
const checkOperator = (inputValue) => {
	if (state.operatorActive) {
		display.textContent = inputValue;
		state.currentDisplayedNum = display.textContent;
		state.operatorActive = false;
	} else {
		state.currentDisplayedNum = display.innerText + inputValue;
		display.textContent = state.currentDisplayedNum;
	}
};

//ensuring that the user is only able to enter one decimal per number
const doesDisplayContainDecimal = () => {
	return display.innerText.includes(".");
};

const isInputADecimal = (inputValue) => {
	return inputValue.includes(".");
};

//Event listener for all number buttons
const numbers = document.querySelectorAll(".num").forEach((button) => {
	button.addEventListener("click", function () {
		const inputValue = button.innerText;
		const displayIsEmpty = display.innerText == 0 ? true : false;
		if (displayIsEmpty) {
			display.textContent = inputValue;
		} else {
			if (
				(isInputADecimal(inputValue) && doesDisplayContainDecimal()) ==
				false
			) {
				checkOperator(inputValue);
			}
		}
	});
});

//Event listeners for all operators
const performCalculation = (operator) => {
	if (state.operator) {
		state.currentCalc = operators[state.operator](
			Number(state.left),
			Number(state.currentDisplayedNum)
		);
		state.operator = operator;
	} else {
		state.operator = operator;
		state.currentCalc = operators[state.operator](
			Number(state.left),
			Number(state.currentDisplayedNum)
		);
	}
	state.operatorActive = true;
	if (state.left) {
		state.left = state.currentCalc;
		display.innerText = state.currentCalc;
	} else {
		state.left = display.innerText;
	}
};

const operatorButtons = document.querySelectorAll(".operator-buttons").forEach((operatorButton) => {
		operatorButton.addEventListener("click", (e) => {
			performCalculation(e.target.textContent);
		});
	});

const equals = document.querySelector(".equals");
equals.addEventListener("click", function () {
	state.currentCalc = operators[state.operator](
		Number(state.left),
		Number(state.currentDisplayedNum)
	);
	display.innerText = state.currentCalc;
});

reset.addEventListener("click", function () {
	state = {
		left: null,
		operator: null,
		operatorActive: false,
		right: 0,
		currentDisplayedNum: 0,
		currentCalc: 0,
	};

	display.innerText = 0;
});
