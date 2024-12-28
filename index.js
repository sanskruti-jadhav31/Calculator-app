let currentInput = ""; // Stores the current input
let previousInput = ""; // Stores the previous input before an operator
let operator = ""; // Stores the current operator

// Function to append a number to the current input
function appendNumber(number) {
  currentInput += number; // Append the clicked number to the current input
  updateDisplay(); // Update the display
}

// Function to append an operator (+, -, *, /)
function appendOperator(op) {
  if (currentInput === "") return; // Don't append an operator if there's no current input
  if (previousInput !== "") { // If there's already a previous input, calculate the result first
    calculateResult();
  }
  operator = op; // Set the operator
  previousInput = currentInput; // Store the current number
  currentInput = ""; // Clear the current input for the next number
  updateDisplay(); // Update the display
}

// Function to calculate the result
function calculateResult() {
  if (previousInput === "" || currentInput === "") return; // No result if inputs are missing
  let result;
  const prev = parseFloat(previousInput); // Convert previous input to a float
  const curr = parseFloat(currentInput);  // Convert current input to a float

  // Perform the operation based on the operator
  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      if (curr === 0) {
        result = "Error"; // Handle division by zero
      } else {
        result = prev / curr;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString(); // Set the result as the current input
  operator = ""; // Reset the operator
  previousInput = ""; // Reset the previous input
  updateDisplay(); // Update the display
}

// Function to clear the display and reset inputs
function clearDisplay() {
  currentInput = ""; // Reset current input
  previousInput = ""; // Reset previous input
  operator = ""; // Reset operator
  updateDisplay(); // Update the display
}

// Function to update the display with the current input
function updateDisplay() {
  document.getElementById("display").value = currentInput; // Update the display element
}

