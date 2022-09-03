"use strict";

const button = document.querySelector(".keys");
const display = document.querySelector(".display");
const equalTo = document.querySelector(".equal");
const clearInput = document.querySelector(".c");
var equalToJustPressed = true;

const displayValue = function (e) {
  if (e.target.classList.contains("btn")) {
    if (equalToJustPressed) {
      display.value = "";
      equalToJustPressed = false;
    }
    display.value += e.target.innerText;
  }
};

const calc = (e) => {
  if (display.value) {
    equalToJustPressed = true;
    display.value = eval(display.value);
  } else {
    display.value = "";
  }
};

const clearDisplay = () => (display.value = "");

button.addEventListener("click", displayValue);
equalTo.addEventListener("click", calc);
clearInput.addEventListener("click", clearDisplay);
