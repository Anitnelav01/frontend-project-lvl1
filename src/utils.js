const getRandomNumber = (minRan, maxRan) => Math.floor(Math.random() * (maxRan - minRan) + minRan);

const getRundomIndex = (operatorArray) => {
  const operatorLength = operatorArray.length;
  const randomIndex = Math.floor(Math.random() * (operatorLength - 1 + 1));
  return randomIndex;
};

export { getRandomNumber, getRundomIndex };
