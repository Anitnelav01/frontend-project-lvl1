import readlineSync from 'readline-sync';
import { name, greetingByName, greetings } from './brain-games.js'

const ParityCheck = () => {

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for(let i = 0; i < 3; i++){
    const getNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    console.log(`"Question:" ${getNumber}`);
    const answer = readlineSync.question(`Your answer: `);

      if (getNumber % 2 === 0){
        const correctAnswer = 'yes';

        if(answer == correctAnswer){
          console.log('Correct!');
        } else {
          return console.log("Let's try again, Bill!");
        }
      } else if (getNumber % 2 !== 0){
        const correctAnswer = 'no';
        if(answer == correctAnswer){
          console.log('Correct!');
        } else {
          return console.log("Let's try again, Bill!");
        }
      }
  } 
  console.log(`Congratulations, ${name} !`);
}   

ParityCheck();
