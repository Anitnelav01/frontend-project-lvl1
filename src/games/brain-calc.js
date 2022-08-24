import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

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

const generateRound = () => {
  const sign = operators[getRandomIndex(operators)];
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);

  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = String(calculate(sign, number1, number2));
  return [question, correctAnswer];
};

const runCalc = () => {
  run(description, generateRound);
};

export default runCalc;
