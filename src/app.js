const input = document.getElementById("email");
const errorMessage = document.querySelector(".error");
const form = document.querySelector(".form");
const button = document.querySelector(".button");

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

button.addEventListener("click", function () {
  if (!emailIsValid(input.value.trim())) {
    input.classList.add("error-border");
    errorMessage.classList.add("show");
  } else {
    input.classList.remove("error-border");
    errorMessage.classList.remove("show");
  }
});
