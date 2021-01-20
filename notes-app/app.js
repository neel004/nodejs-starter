// const validator = require('validator');
const read_notes = require('./notes.js');
const chalk = require('chalk')

const err = chalk.red.bold
const success = chalk.green.underline.dim.inverse
const warning = chalk.keyword('orange')
const filename = "notes.txt";
read_notes(filename);
// console.log(validator.isURL('google.com'))
console.log(chalk.blue.bold('Hello world!'))
console.log(err("404")+success("neel")+warning("alert"))