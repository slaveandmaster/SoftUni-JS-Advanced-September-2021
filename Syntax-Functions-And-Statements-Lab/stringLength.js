function stringLength(firstWord, secondWord, thirdWord) {
    const sum = Number(firstWord.length) + Number(secondWord.length) + Number(thirdWord.length);
    const avgLength = Math.floor(sum / 3);
    console.log(`${sum}`);
    console.log(`${avgLength}`);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');