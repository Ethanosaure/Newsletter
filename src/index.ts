import resetInput from "./resetInput";
import createErrorMsg from "./createErrorMsg";
import checkEmail from "./checkEmail";
const errorDiv = <HTMLDivElement>document.getElementById("errorElement");
const emailInput = <HTMLInputElement>document.getElementById("emailInput");
const form = <HTMLFormElement>document.getElementById("form");
const successMsg = <HTMLDivElement>document.getElementById("SuccessMessage");
const newsLetter = <HTMLDivElement>document.getElementById("newsletter");
const userEmail = <HTMLElement>document.getElementById("userEmail");

if (form && emailInput) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkEmail({ emailInput, newsLetter, successMsg, userEmail })) {
      return;
    } else {
      createErrorMsg({ emailInput, errorDiv });
    }
  });
}

if (emailInput) {
  resetInput(emailInput);
}
