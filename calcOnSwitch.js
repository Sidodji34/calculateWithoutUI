function calc(operation, a, b) {
    switch (Number.isNaN(a) || Number.isNaN(b)) {
        case true:
            return 'Error';
    }
    switch (a) {
        case String(a):
            return 'Error';
    }
    switch (b) {
        case String(b):
        case undefined:
            return 'Error';
    }
    switch (operation) {
        case 'sum':
            return a + b;

        case 'min':
            return a - b;

        case 'del':
            return (b === 0 ? 'Error' : a / b);

        case 'mul':
            return a * b;

        default:
            return 'unknown operation';
    }
}
console.log(calc());