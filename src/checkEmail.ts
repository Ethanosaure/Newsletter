export default function checkEmail({
  emailInput,
  newsLetter,
  successMsg,
  userEmail,
}: {
  emailInput: HTMLInputElement;
  newsLetter: HTMLDivElement;
  successMsg: HTMLDivElement;
  userEmail: HTMLElement;
}): boolean {
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
