export function resetInput(emailInput: HTMLInputElement): void {
  if (emailInput) {
    emailInput.addEventListener("click", (e) => {
      e.preventDefault();
      if (document.getElementById("errorText")) {
        document.getElementById("errorText")?.remove();
        emailInput.classList.remove("errorInput");
        return;
      }
    });
  }
}
