const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomIndex = (data) => Math.floor(Math.random() * data.length);


export { getRandomNumber, getRandomIndex };