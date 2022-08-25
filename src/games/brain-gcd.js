import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers';
const minRange = 1;
const maxRange = 50;

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));


const generateResponse = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));

  return [question, correctAnswer];
};

const runGcd = () => {
  run(description, generateResponse);
};

export default runGcd;
