function lockedProfile() {
    //element for delagating eventListener
    const mainContent = document.querySelector("#main");
    mainContent.addEventListener("click", onClick);
    function onToggle(e) {
      const parentElement = e.target.parentElement;
      const isCheckRadioButton = parentElement.querySelector(
        'input[type=radio][value="unlock"]'
      ).checked;
      const hiddenFileds = Array.from(parentElement.children).find((x) =>
        x.id.includes("HiddenFields")
      );
      if (isCheckRadioButton) {
        if (e.target.tagName == "BUTTON" && e.target.textContent == "Show more") {
          hiddenFileds.style.display = "block";
          e.target.textContent = "Hide it";
        } else {
          hiddenFileds.style.display = "";
          e.target.textContent = "Show more";
        }
      }
    }
    function onClick(e) {
      if (e.target.tagName == "BUTTON") {
        onToggle(e);
      } else if (e.target.type == "radio" && e.target.tagName == "INPUT") {
        let btn = e.target.parentElement.querySelector("button");
        if (e.target.value == "lock") {
          btn.disabled = true;
        } else {
          btn.disabled = false;
        }
      }
    }
  }
  