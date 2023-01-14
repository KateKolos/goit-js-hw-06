const wrapButton = {
  incrementButton: document.querySelector("[data-action='increment']"),
  decrementButton: document.querySelector("[data-action='decrement']"),
  span: document.getElementById("value"),
  wrapper: document.getElementById("counter"),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};

wrapButton.incrementButton.addEventListener("click", increment);
wrapButton.decrementButton.addEventListener("click", decrement);
