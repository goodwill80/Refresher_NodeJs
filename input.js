const readline = require('readline');
const { read } = require('fs');
const prompt = require('prompt-sync')();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question(`What is your name ?`, (name) => {
//   console.log(`Hi, ${name}`);
//   rl.close();
// });

// const name = prompt('What is your name?');
// console.log('Welcome to nodeJS! ' + name);

// const _ = require('lodash');
// const arr = [1, 4, 6, 8];
// console.log(_.last(arr));

const cowsay = require('cowsay');

cowsay.say('hello');
