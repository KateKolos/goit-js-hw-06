function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const changeColorText = document.querySelector(".color");
const changeButton = document.querySelector(".change-color");

changeButton.addEventListener("click", onChangeButtonClick);

function onChangeButtonClick() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  changeColorText.textContent = getRandomHexColor();
  console.log(`${getRandomHexColor()}`);
}
