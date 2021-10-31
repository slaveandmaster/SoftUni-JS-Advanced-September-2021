function solve() {
  let textArea = document.getElementById("input").value;
  let sentense = textArea.split(".").filter((x) => x.length >= 1).map(x => x.trim());
  let result = document.querySelector("#output");
  let pIdx = 0;
  let paragraphs = sentense.reduce((acc, value, index) => {
    if (index % 3 === 0 && index != 0) pIdx++;
    acc[pIdx] = (acc[pIdx] || "") + `${value}.`;
    return acc;
  }, []);

  result.innerHTML = paragraphs.map((line) => `<p>${line}</p>`).join('\n');
}
