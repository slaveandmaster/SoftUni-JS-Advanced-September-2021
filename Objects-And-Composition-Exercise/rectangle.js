function solve(width, height, color) {
    const rect = {
        'width': width,
        'height': height,
        'color':color.charAt(0).toUpperCase() + color.slice(1)
    }
    rect.calcArea = () => rect.width * rect.height;
    return rect;
}

let rect = solve(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
