// var generateName = require("sillyname");
// to avoid require() we can use import keyword but for that we have to make type= module in our package.json
import generateName from "sillyName";

var sillyName = generateName();//generatename is the method which generates random name

console.log(`My name is ${sillyName}.`);


// const superheroes = require("superheroes");
import superheroes from "superheroes";

const name = superheroes.random();
console.log(`I am ${name}!`);