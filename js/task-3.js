const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const resultValue = event.target.value.trim();
  if (resultValue.length > 0) {
    nameEl.textContent = resultValue;
  } else {
    nameEl.textContent = "Anonymous";
  }
});
