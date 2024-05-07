function calculator(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2
      break
    case '-':
      return operand1 - operand2
      break
    case '*':
      return operand1 * operand2
      break
    case '/':
      return operand1 / operand2
      break
    default:
      throw error()
  }
}

module.exports = calculator;
