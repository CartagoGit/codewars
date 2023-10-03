//* https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/train/typescript

const isPrime = (num: number): boolean => {
	for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
		if (num % i === 0) return false;
	return num > 1;
};

export const numPrimorial = (n: number): number => {
	let primes: number[] = [];
	for (let i = 2; primes.length < n; i++) if (isPrime(i)) primes.push(i);
	return primes.reduce((curr, num) => curr * num, 1);
};
