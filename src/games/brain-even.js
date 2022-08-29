import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 0;
const maxRange = 20;

const isEven = (number) => number % 2 === 0;

const generateResponse = () => {
  const number = getRandomNumber(minRange, maxRange);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [number, correctAnswer];
};

const runEven = () => {
  run(description, generateResponse);
};

export default runEven;
