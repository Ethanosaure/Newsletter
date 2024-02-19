const formElement = document.getElementById("form");
const button = <HTMLButtonElement>document.getElementById("submitButton");
const errorDiv = <HTMLDivElement>document.getElementById("errorElement");
const emailInput = <HTMLInputElement>document.getElementById("emailInput");

button.addEventListener("click", (e) => {
  const emailInputValue = (<HTMLInputElement>(
    document.getElementById("emailInput")
  )).value;
  if (emailInputValue) {
    console.log(emailInputValue);
  } else {
    if (document.getElementById("errorText")) {
      return;
    }
    const errorText = document.createElement("h3");
    errorText.setAttribute("id", "errorText");
    errorText.classList.add("text-errorText");
    errorText.innerHTML = "valid email required";
    errorDiv.appendChild(errorText);
    emailInput.classList.add("bg-errorInput");
    emailInput.classList.replace("border-grey", "border-errorText");
  }
});
