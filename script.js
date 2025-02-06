const display = document.getElementById('display');

// Clear the display
function clearDisplay() {
  display.textContent = '0';
}

// Append value to the display
function appendValue(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

// Calculate the result
function calculateResult() {
  try {
    // Replace operators with JS symbols and evaluate the expression
    display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
  } catch (error) {
    display.textContent = 'Error';
  }
}
