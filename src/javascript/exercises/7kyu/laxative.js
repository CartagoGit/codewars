//* https://www.codewars.com/kata/5b02ae6aa2afd8f1b4001ba4/train/javascript

/**
 * Get the probability of a laxative effect in a given number of shots.
 *
 * @param {number} shots - Total shots.
 * @param {number} lax - Shots with laxative effect.
 * @param {number} times - Number of times the shots are drunk.
 * @returns {number} Probability with two decimal places.
 */
const getChance = (n, x, a) => {
	console.log({ n, x, a });
	if (x >= n || n <= a) return NaN;
	const totalPermutations = permutations(n, a);
	const noLaxativePermutations = permutations(n - x, a);
	const probability = noLaxativePermutations / totalPermutations;
    console.log({ totalPermutations, noLaxativePermutations, probability });
	return Math.round(probability * 100) / 100;
};

const factorial = (n) => {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
	console.log({ result, n });
	return result;
};

const permutations = (n, r) => {
	return factorial(n) / factorial(n - r);
};
