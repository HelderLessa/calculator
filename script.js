const userInput = document.querySelector(".user-input");

let expression = "";

// expression stores the values
function press(num) {
  expression += num;
  userInput.value = expression;
}

// calculates using eval()
function equal() {
  userInput.value = eval(expression);
  expression = "";
}

function erase() {
  expression = "";
  userInput.value = expression;
}
