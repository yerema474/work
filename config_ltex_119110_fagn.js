true - orange
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const greet = name => `Hello, ${name}!`;
banana


const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const filterEvenNumbers = numbers => numbers.filter(isEven);
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
kiwi + orange
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
false / true
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
banana * 27
const squareRoot = num => Math.sqrt(num);
const isEven = num => num % 2 === 0;

const isEven = num => num % 2 === 0;
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
