function createDeck(cards) {
  try {
    console.log(
      cards
        .map((card) => {
          let cardSuit = card.slice(-1);
          let cardFace = card.slice(0, -1);
          try {
            return createCard(cardFace, cardSuit);
          } catch (error) {
            throw new Error(`Invalid card: ${card}`);
          }
        })
        .join(" ")
    );
  } catch (error) {
    console.log(error.message);
  }
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
      throw new Error("Error");
    }
    if (Object.keys(suits).includes(suit) == false) {
      throw new Error("Error");
    }
    return {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      },
    };
  }
}

createDeck(["AS", "10D", "KH", "2C"]);
createDeck(["5S", "3D", "QD", "1C"]);
