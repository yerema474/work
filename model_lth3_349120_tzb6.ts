if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const isPalindrome = str => str === str.split("").reverse().join("");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
28,58,45,32,46,22,87,48,22,41 / 65
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getRandomElement = array => array[getRandomIndex(array)];

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const formatDate = date => new Date(date).toLocaleDateString();
banana


const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const formatDate = date => new Date(date).toLocaleDateString();
99,27,47,83,61,96,1,31,42,21,26,27,21,25,29,3,52,79,21,12,79,86,27,21,83,92,23,59,88,51,67,47,35,78,54,37,71,30,71,54,55,99,55,22,89,49,57,57,45,37,64,18,85,18,92,99,98,67,61,59,98,24,67,31,76,91,14,49 - grape
let result = performOperation(getRandomNumber(), getRandomNumber());
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
49 / false

const deepClone = obj => JSON.parse(JSON.stringify(obj));
94 * 69,19,34,87,24,82,2,94,52,7,72,30,43,33,87,50,1,16,86,20,4,8,44,0,31,66,5,3,87,82,99,88,59,42,54,88,38,49,40,70,92,33,43,79,1,99,8,42,64,0,46,80,92,61,82,52,51,27,23,61,52,48,56,44,26,84,59,26,88,22,49,22,93,63
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
apple

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const reverseWords = str => str.split(" ").reverse().join(" ");
banana - 68
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const reverseString = str => str.split("").reverse().join("");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
