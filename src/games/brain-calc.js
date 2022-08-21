import run from '../index.js';
import { getRandomNumber, index } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 0;
const maxRange = 50;

const calculate = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error('Unknown state!');
  }
};

const generateTask = () => {
  const symbol = operators[index(operators)];
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);

  const question = `${number1} ${symbol} ${number2}`;
  const correctAnswer = String(calculate(symbol, number1, number2));
  return [question, correctAnswer];
};

const ranCalc = () => {
  run(description, generateTask);
};

export default ranCalc;
