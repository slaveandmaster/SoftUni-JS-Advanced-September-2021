function createCard(face, suit) {
  let faces = {
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    J: "J",
    Q: "Q",
    K: "K",
    A: "A",
  };
  let suits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
  if (Object.keys(faces).includes(face) == false) {
      throw new Error('Error');
  }
  if (Object.keys(suits).includes(suit) == false) {
      throw new Error('Error');
  }
  return {
    face,
    suit: suits[suit],
    toString() {
      return this.face + this.suit;
    },
  };
}
console.log(card1 = createCard("A", "S").toString());
console.log(createCard("10", "H").toString());
console.log(createCard("1", "C").toString());
