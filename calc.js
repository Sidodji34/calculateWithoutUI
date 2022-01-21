function calc(operation, a, b) {
      if (!operation || !a || !b) {
          return 'Error';
      }
    if (a === String(a) || b === String(b)) {
        return  'Error';
    } 
    if (operation) {
        if (operation === 'sum') {
            return a + b;
        } else if (operation === 'min') {
            return a - b;
        } else if (operation === 'del') {
            if (b === 0) {
                return 'Error';
            } else {
                return a / b;
            }
        } else if (operation === 'mul') {
            return a * b;
        } else {
          return 'unknown operation'
        }
    }
}
console.log(calc('sum', 10, 1));