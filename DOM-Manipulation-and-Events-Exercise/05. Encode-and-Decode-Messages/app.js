function encodeAndDecodeMessages() {
  let parentElt = document.getElementById("main");
  //   let encodeMsg = parentElt.querySelector("textarea");
  let [encodeMsg, output] = Array.from(parentElt.querySelectorAll("textarea"));
  parentElt.addEventListener("click", (e) => {
    if (
      e.target.tagName == "BUTTON" &&
      e.target.textContent == "Encode and send it"
    ) {
      let result = "";
      for (const letter of encodeMsg.value) {
        let newChar = letter.charCodeAt(0) + 1;
        result += String.fromCharCode(newChar);
      }

      output.value = result;
      encodeMsg.value = "";
    } else if (
      e.target.tagName == "BUTTON" &&
      e.target.textContent == "Decode and read it"
    ) {
      let result = "";
      for (const char of output.value) {
        let newChar = char.charCodeAt(0) - 1;
        result += String.fromCharCode(newChar);
      }
      output.value = result;
    }
  });
}
