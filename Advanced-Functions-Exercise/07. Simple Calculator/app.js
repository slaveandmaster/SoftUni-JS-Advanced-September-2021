function calculator() {
    const html = {
        selector: "",
        selectorTwo: "",
        result: "",
    }
    const actions = {
        init,
        add,
        subtract
    }
    function init(selector1, selector2, resultSelector) {
        html.selector = document.querySelector(selector1);
        html.selectorTwo = document.querySelector(selector2);
        html.result = document.querySelector(resultSelector);
    }
    function add() {
        html.result.value = Number(html.selector.value) + Number(html.selectorTwo.value);
    }
    function subtract() {
        html.result.value = Number(html.selector.value) - Number(html.selectorTwo.value);
    }
    return actions;
}
const calculate = calculator(); 
calculate.init ('#num1', '#num2', '#result'); 




