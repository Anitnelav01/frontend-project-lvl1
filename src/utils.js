const getRandomNumber = (minRan, maxRan) => {
  return Math.floor(Math.random() * (maxRan - minRan) + minRan);
}

const index = (symbols) => {
  const symbolsLength = symbols.length;
  const index = Math.floor(Math.random() * (symbolsLength - 1 + 1));
  return index;
}

export { getRandomNumber, index };