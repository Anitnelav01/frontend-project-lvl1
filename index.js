import readlineSync from 'readline-sync';

const roundsCount = 3;

export const getRandomNumber = (minRange, maxRange) => {
  const randomNumber = Math.floor(Math.random() * (maxRange - minRange) + minRange);
  return randomNumber;
};

export const isEvenNumber = (number) => number % 2 === 0;

const runGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('You answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default runGame;
