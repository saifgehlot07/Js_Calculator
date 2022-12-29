// Calculator Logic

const keyBtn = Array.from(document.querySelectorAll("[data-key]"));
const equalBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-delete]");
const clearBtn = document.querySelector("[data-clear-all]");
const previousResult = document.querySelector("[data-previous-result]");
const currentResult = document.querySelector("[data-current-result]");

keyBtn.forEach((key) =>
  key.addEventListener("click", function () {
    currentResult.textContent = currentResult.textContent + this.textContent;
  })
);

clearBtn.addEventListener("click", () => {
  currentResult.textContent = currentResult.textContent = "";
  previousResult.textContent = "";
});

deleteBtn.addEventListener("click", () => {
  currentResult.textContent = currentResult.textContent.slice(0, -1);
});

equalBtn.addEventListener("click", function () {
  const result = eval(currentResult.textContent);
  currentResult.textContent = previousResult.textContent = result;
});

// Theme Switch Logic

const body = document.querySelector("body");
const calculator = document.querySelector(".calculator");
const toggle = document.querySelector(".toggle");
const button = document.querySelector(".btn");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  calculator.classList.toggle("active");
});
