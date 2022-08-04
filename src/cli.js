import readlineSync from 'readline-sync';

const question = () => {
  let userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default question;



