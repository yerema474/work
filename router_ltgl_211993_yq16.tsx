const reverseWords = str => str.split(" ").reverse().join(" ");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
12 - false

const formatDate = date => new Date(date).toLocaleDateString();
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const randomNumber = getRandomNumber();

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const reverseString = str => str.split("").reverse().join("");

