function Calc(operation, a, b) {
  let objectOperations = {
    'sum': a + b,
    'min': a - b,
    'del': a / b,
    'mul': a * b,
  }
  if (a && b && a === Number(a) && b === Number(b)) {
    for (let searchKey in objectOperations) {
      if (operation === searchKey) {
        operation = objectOperations[searchKey]
        return operation;
      }
    } return 'Unknown operation';
  } return 'Error';
}
console.log(Calc('sum', 10, 5))