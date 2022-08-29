const getRandomNumber = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);


const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

export { getRandomNumber, getRandomIndex };
