import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const minRange = 0;
const maxRange = 50;
const minStep = 2;
const maxStep = 5;
const minLength = 0;

const getArithmeticProgression = () => {
  let progressionNumber = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const generateResponse = () => {
  const progression = getArithmeticProgression();
  const randomIndex = getRandomNumber(minLength, progressionLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => {
  run(description, generateResponse);
};

export default runProgression;
