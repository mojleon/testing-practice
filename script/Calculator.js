function Calculator(number_1, operator, number_2) {
  switch(operator) {
    case '+':
        return number_1 + number_2;
    case '-':
        return number_1 - number_2;
    case '*':
        return number_1 * number_2;
    case '/':
        return number_1 / number_2;
    default:
        return 'Invalid operator';
  }
}

module.exports = Calculator;