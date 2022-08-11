#!/usr/bin/env node

import runGame, { getRandomNumber } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumberCheck = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = primeNumberCheck(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

runGame(description, getQuestionAndAnswer);
