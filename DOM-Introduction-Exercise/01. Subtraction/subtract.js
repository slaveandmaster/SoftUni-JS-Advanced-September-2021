function subtract() {
    let first = Number(document.querySelector('#firstNumber').value);
    let second = Number(document.querySelector('#secondNumber').value);
    document.querySelector('#result').textContent = first - second;
}