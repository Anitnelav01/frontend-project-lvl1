const getRandomNumber = (minRan, maxRan) =>{
  return Math.floor(Math.random() * (maxRan - minRan) + minRan);
};

const index = (symbols) => {
  const symbolsLength = symbols.length;
  const randomIndex = Math.floor(Math.random() * (symbolsLength - 1 + 1));
  return randomIndex;
};

export { getRandomNumber, index };
