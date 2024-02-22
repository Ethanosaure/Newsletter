interface checkEmailProps {
  emailInput: HTMLInputElement;
  newsLetter: HTMLDivElement;
  successMsg: HTMLDivElement;
  userEmail: HTMLElement;
}

export function checkEmail(props: checkEmailProps): boolean {
  const { emailInput, newsLetter, successMsg, userEmail } = props;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value) {
    if (emailRegex.test(emailInput.value)) {
      console.log(emailInput.value);
      newsLetter.classList.add("hidden");
      successMsg.classList.replace("hidden", "visible");
      userEmail.innerText = emailInput.value;
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
