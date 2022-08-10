#!/usr/bin/env node

import runGame, { getRandomNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers';

const getGreatestCommonDivisor = (oneItem, twoItem) => {
  if (oneItem === 0 || twoItem === 0) {
    return oneItem + twoItem;
  }
  if (oneItem > twoItem) {
    return getGreatestCommonDivisor(oneItem - twoItem, twoItem);
  }
  return getGreatestCommonDivisor(oneItem, twoItem - oneItem);
};

const getQuestionAndAnswer = () => {
  const oneNumber = getRandomNumber();
  const twoNubmer = getRandomNumber();

  const question = `${oneNumber} ${twoNubmer}`;
  const correctAnswer = String(getGreatestCommonDivisor(oneNumber, twoNubmer));

  return [question, correctAnswer];
};

runGame(description, getQuestionAndAnswer);
