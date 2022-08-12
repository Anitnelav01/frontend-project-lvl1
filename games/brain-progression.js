#!/usr/bin/env node

import runGame, { getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getArithmeticProgression = () => {
  let progressionNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 5);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getArithmeticProgression();
  const randomIndex = getRandomNumber(0, progressionLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

runGame(description, getQuestionAndAnswer);
