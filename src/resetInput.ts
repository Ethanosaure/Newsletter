export default function resetInput(emailInput: HTMLInputElement): void {
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
}
