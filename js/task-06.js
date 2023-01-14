const textInput = document.getElementById("validation-input");
console.log(textInput);
console.dir(textInput);

const textLength = Number(textInput.dataset.length);
console.log("textLength", textLength);
console.dir(textLength);

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === textLength) {
    event.target.classList = "valid";
  } else {
    event.target.classList = "invalid";
  }
});
