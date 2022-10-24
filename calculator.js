var button = document.getElementsByClassName("button");
var display = document.getElementById("resultBox");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "AC") {
      display.innerText = "";
    } else if (value == "+") {
      operator = "+";
      operand1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "-") {
      operator = "-";
      operand1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "*") {
      operator = "*";
      operand1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "/") {
      operator = "/";
      operand1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "%") {
      operator = "%";
      operand1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "=") {
      operand2 = parseFloat(display.textContent);
      display.innerText = "";
      if (operand1 != 0 && operand2 == 0) {
        display.innerText = "Zero Division Is Not Possible";
        return;
      }

      var ans = eval(operand1 + operator + operand2);
      display.innerText = ans;
    } else {
      display.innerText += value;
    }
  });
}
