const textInput = document.getElementById("font-size-control");

const span = document.getElementById("text");

textInput.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  textInput.range = event.currentTarget.value;
  span.style.fontSize = `${event.currentTarget.value}px`;
}
console.log(span.textContent);
console.log(span.fontSize);
