import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const parity = (number) => number % 2 === 0;

const generateResponse = () => {
  const question = getRandomNumber(0, 20);
  const correctAnswer = parity(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(description, generateResponse);
};
