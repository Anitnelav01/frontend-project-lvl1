import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const limitLength = 10;
const minRange = 0;
const maxRange = 50;
const minStep = 2;
const maxStep = 5;

const createProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start);
    start += step;
  }
  return progression;
};

const generateResponse = () => {
  let start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const progression = createProgression(start, step, limitLength);
  const hiddenNumberIndex = getRandomIndex(progression);

  const correctAnswer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => {
  run(description, generateResponse);
};

export default runProgression;
