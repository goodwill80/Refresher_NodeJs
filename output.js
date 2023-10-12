// const x = '1';
// const y = '2';

// console.log(x, y);

// FORMATTING OUTPUT
// %s format variable to string
// %d format variable to number
// %i format variable to int
// %o format variable to obj
// console.log('I am %s and my age is %d', 'Jonathan', 45);

// CLEAR AND COUNT
// console.clear();
// console.count('I am Jonathan');
// console.count('I am Jonathan');
// console.count('I am Oliver');
// console.countReset('I am Jonathan');
// console.count('I am Jonathan');

// TRACE
// const function1 = () => console.trace();
// const function2 = () => function1();
// function2();

// TIMING OF FUNCTIONS
// const sum = () => console.log(`The sum of 2 and 3 is: ${2 + 3}`);
// const multiply = () =>
//   console.log(`The multiplication of 2 and 3 is: ${2 * 3}`);
// const measureTime = () => {
//   console.time('sum()');
//   sum();
//   console.timeEnd('sum()');
//   console.time('multiply()');
//   multiply();
//   console.timeEnd('multiply()');
// };
// measureTime();

//PROGRESS BAR
// const ProgressBar = require('progress');
// const bar = new ProgressBar('downloading [:bar] :rate/bps :percent :etas', {
//   total: 20,
// });
// const timer = setInterval(() => {
//   bar.tick();
//   if (bar.complete) {
//     clearInterval(timer);
//   }
// }, 2000);

// COLORING
const chalk = require('chalk');
console.log(chalk.blue('This is nodejs refresher'));
