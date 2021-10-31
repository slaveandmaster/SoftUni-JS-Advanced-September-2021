function wordsUppercase(str) {
    let pattern = /\w+/g;
    let result = str.toUpperCase().match(pattern).join(', ');
    console.log(result);
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');