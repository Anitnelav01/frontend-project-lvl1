import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 2;
const maxRange = 100;

const isEven = (number) => {
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateResponse = () => {
  const question = getRandomNumber(minRange, maxRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runPrime = () => {
  run(description, generateResponse);
};

export default runPrime;
