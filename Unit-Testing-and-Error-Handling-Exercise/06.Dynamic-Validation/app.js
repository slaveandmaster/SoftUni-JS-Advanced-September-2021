function validate() {
  let emailInput = document.querySelector("#email");
  let emailRegex = /([a-z]+)(@)([a-z]+)(.)([a-z]+)/;
  emailInput.addEventListener("change", () => {
    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add("error");
    } else {
      emailInput.classList.remove("error");
    }
  });
}
