const button = <HTMLButtonElement>document.getElementById("submitButton");
const errorDiv = <HTMLDivElement>document.getElementById("errorElement");
const emailInput = <HTMLInputElement>document.getElementById("emailInput");
const form = <HTMLFormElement>document.getElementById("form");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const successMsg = <HTMLDivElement>document.getElementById("SuccessMessage");
const newsLetter = <HTMLDivElement>document.getElementById("newsletter");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailInput.value) {
      if (emailRegex.test(emailInput.value)) {
        newsLetter.classList.add("hidden");
        successMsg.classList.replace("hidden", "visible");
      }
    } else {
      if (document.getElementById("errorText")) {
        return;
      }
      const errorText = document.createElement("h3");
      errorText.innerText = "valid email required";
      errorText.setAttribute("id", "errorText");
      emailInput.classList.add("bg-errorText");
      errorDiv.appendChild(errorText);
    }
  });
}

if (emailInput) {
  emailInput.addEventListener("click", (e) => {
    e.preventDefault();
    if (document.getElementById("errorText")) {
      document.getElementById("errorText")?.remove();
      emailInput.classList.remove("bg-errorText");
      return;
    }
  });
}
