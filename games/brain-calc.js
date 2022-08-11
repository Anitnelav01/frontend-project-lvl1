#!/usr/bin/env node

import runGame, { getRandomNumber } from '../index.js';

const description = 'What is the result of the expression?';

const randomOperator = ['+', '-', '*'];

const getRandomOperator = (symbols) => {
  const symbolsLength = symbols.length;
  const randomIndex = Math.floor(Math.random() * (symbolsLength - 1 + 1));
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

const calc = (symbol, randomNumberOne, randomNumberOneTwo) => {
  switch (symbol) {
    case '+': return randomNumberOne + randomNumberOneTwo;
    case '-': return randomNumberOne - randomNumberOneTwo;
    case '*': return randomNumberOne * randomNumberOneTwo;
    default: return null;
  }
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomOperator(randomOperator);
  const randomNumberOne = getRandomNumber(0, 50);
  const randomNumberTwo = getRandomNumber(0, 50);

  const question = `${randomNumberOne} ${randomSymbol} ${randomNumberTwo}`;
  const correctAnswer = String(calc(randomSymbol, randomNumberOne, randomNumberTwo));
  return [question, correctAnswer];
};

runGame(description, getQuestionAndAnswer);
