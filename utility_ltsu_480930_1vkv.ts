1 / banana
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
82 / 7,76,99,12,28,94,56,85,71,37,1,41,0,50,84,13,84

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
