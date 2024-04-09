function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let array = [];
for (let i = 0; i < 20; i++) {
    array.push(generateRandomNumber());
}

console.log("Початковий масив:");
console.log(array);

array.sort(function(a, b) {
    return a - b;
});

console.log("Відредагований масив за зростанням:");
console.log(array);

