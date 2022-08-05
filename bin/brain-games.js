#!/usr/bin/env node

import question from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const result = question();

console.log(`Hello, ${result} !`);
