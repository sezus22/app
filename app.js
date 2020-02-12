let repeat = require('repeat-string');
let joke = require('one-liner-joke');

console.log(repeat('Suzes', 10));
console.log(repeat(joke.getRandomJoke().body, 1000));

