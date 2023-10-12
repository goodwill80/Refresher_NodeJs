require('dotenv').config();

// console.log(process.env.NAME);
// console.log(process.env.PROFESSIONAL);

// const ford = require('./car');
// console.log(ford.brand);

// const {
//   data: { ford, tesla },
// } = require('./car');

// console.log(ford);

// const { ford } = require('./car');
// const { tesla } = require('./car');

// console.log(JSON.stringify(ford, undefined, 3));
// console.log(JSON.stringify(tesla, undefined, 2));

const path = require('path');
const filePath =
  '/Users/hokitjonathan/Desktop/SCTP/nodejs/node-js-tutorial/files/sample.txt';

// // Dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);

// // Basename
// console.log(path.basename(filePath));
// console.log(__filename);

// // Extension
// console.log(path.extname(filePath));

// const sampleFile = 'sample.txt';
// console.log(path.join(path.dirname(filePath), sampleFile));

// READING FROM A FILE
const fs = require('fs');
// Async way
// fs.readFile(filePath, (err, data) => {
//   if (err) throw new Error('Something went wrong!');
//   console.log(data.toString());
// });
// Sync way
// try {
//   const data = fs.readFileSync(path.join(__dirname, 'files', 'sample.txt'));
//   console.log('2nd function', data.toString());
// } catch (err) {
//   console.log(err);
// }
// Another way
const fspromise = require('fs').promises;

const fileReading = async () => {
  try {
    const data = await fspromise.readFile(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// fileReading();

// WRITING IN FILE
const textFile = path.join(__dirname, 'files', 'text.txt');
const content = 'I live this node js tutorial';
// fs.writeFile(textFile, content, (err) => {
//   if (err) throw new Error('Something went wrong');
//   console.log('Write operation completed successfully');
//   fs.readFile(textFile, 'utf-8', (err, data) => {
//     if (err) throw new Error(err);
//     console.log(data);
//   });
// });

// In FS Promises - Async
const writingInFile = async () => {
  try {
    await fspromise.writeFile(textFile, content);
    await fspromise.appendFile(
      textFile,
      '\n We have given a new name of the file'
    );
    await fs.promises.rename(
      textFile,
      path.join(__dirname, 'files', 'newText.txt')
    );
    const data = fspromise.readFile(textFile);
    console.log((await data).toString());
  } catch (err) {
    console.log(err);
  }
};

writingInFile();
