const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  console.log(
    "🚀 ~ file: task-05.js:6 ~ textInput.addEventListener ~ output",
    output
  );

  if (event.target.value === "") {
    output.textContent = "Anonymous";
  }
});
console.log(textInput);

console.dir(textInput);
