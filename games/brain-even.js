#!/usr/bin/env node

import runGame, { getRandomNumber, isEvenNumber } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

runGame(description, getQuestionAndAnswer);
