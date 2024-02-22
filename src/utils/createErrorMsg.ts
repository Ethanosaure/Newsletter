export function createErrorMsg({
  emailInput,
  errorDiv,
}: {
  emailInput: HTMLInputElement;
  errorDiv: HTMLDivElement;
}): void {
  if (document.getElementById("errorText")) {
    return;
  }
  const errorText = document.createElement("h3");
  errorText.innerText = "valid email required";
  errorText.setAttribute("id", "errorText");
  errorText.setAttribute("class", "errorText");
  emailInput.classList.add("errorInput");
  errorDiv.appendChild(errorText);
}
