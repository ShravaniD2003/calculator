// Append value to display when a number or operator button is clicked
function appendValue(value) {
  document.getElementById("display").value += value;
}

// Clear the entire display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Delete the last entered character
function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Evaluate the expression in the display
function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}
