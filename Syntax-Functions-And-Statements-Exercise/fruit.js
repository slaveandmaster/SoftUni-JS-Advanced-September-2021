function fruit(product, grams, price) {
    const money = (grams / 1000) * price;
    console.log(`I need $${money.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${product}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
