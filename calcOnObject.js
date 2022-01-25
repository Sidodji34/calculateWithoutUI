function Calc(operation, a, b) {
  let objectOperations = {
    'sum': a + b,
    'min': a - b,
    'del': a / b,
    'mul': a * b,
  }
  const isValid = (a && b && a === Number(a) && b === Number(b));
  if (isValid) {
    for (let searchKey in objectOperations) {
      if (operation === searchKey) {
        operation = objectOperations[searchKey]
        return operation;
      }
    } return 'Unknown operation';
  } return 'Error';
}
console.log(Calc('sum', 10))