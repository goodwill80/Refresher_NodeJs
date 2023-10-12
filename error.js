// const error = new Error('Something went wrong!');
// console.log(error.stack);

// throw new Error('I am error object');

// const { CustomError } = require('./CustomError');
// throw new CustomError('This is a custom error object');

const doSomething = () => {
  console.log('I am from do function');
};

try {
  doSomething();
} catch (e) {
  console.log('Error occurred');
  console.log(e);
}
