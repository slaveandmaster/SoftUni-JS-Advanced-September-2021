function toggle() {
  let element = document.querySelector("#extra");
  let btn = document.getElementsByClassName("button")[0];
  if (btn.textContent == "More") {
    element.style.display = "block";
    btn.textContent = "Less";
  } else if (btn.textContent == "Less") {
    element.style.display = "none";
    btn.textContent = "More";
  }
}
