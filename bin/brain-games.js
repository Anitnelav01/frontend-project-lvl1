#!/usr/bin/env node

import question from '../src/cli.js';

const greetings = 'Welcome to the Brain Games!';

console.log(greetings);

const name = question();

const greetingByName = `Hello, ${name} !`

console.log(greetingByName);


export { name, greetingByName, greetings };





