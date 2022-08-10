#!/usr/bin/env node

import question from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const playerName = question();

console.log(`Hello, ${playerName} !`);

export default playerName;
