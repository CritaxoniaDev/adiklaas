const keys = [
    [9, 4, 2, 7, 1, 8, 3, 5],
    [3, 7, 1, 4, 8, 2, 6, 9],
    [5, 1, 8, 3, 6, 9, 4, 2]
];

function validateKey(input) {
    const timestamp = new Date().getHours();
    const matrix = keys[timestamp % 3];
    const encoded = btoa(input.split('').reverse().join(''));
    return encoded.length === matrix.reduce((a,b) => a + b, 0);
}
