import run from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers';
const minRange = 1;
const maxRange = 50;

const getGreatestCommonDivisor = (firstItem, secondItem) => {
  if (firstItem === 0 || secondItem === 0) {
    return firstItem + secondItem;
  }
  if (firstItem > secondItem) {
    return getGreatestCommonDivisor(firstItem - secondItem, secondItem);
  }
  return getGreatestCommonDivisor(firstItem, secondItem - firstItem);
};

const generateResponse = () => {
  const firstNumber = getRandomNumber(minRange, maxRange);
  const secondNubmer = getRandomNumber(minRange, maxRange);

  const question = `${firstNumber} ${secondNubmer}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNubmer));

  return [question, correctAnswer];
};

const runGcd = () => {
  run(description, generateResponse);
};

export default runGcd;
