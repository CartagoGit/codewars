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
	const totalCombinations = combinations(n, a);
	const noLaxativeCombinations = combinations(n - x, a);
	const probability = noLaxativeCombinations / totalCombinations;
	console.log({ totalCombinations, noLaxativeCombinations, probability });
	return Math.round(probability * 100) / 100;
	
};

const combinations = (n, r) => {
	let result = 1;
	for (let i = 1; i <= r; i++) {
		result *= (n - r + i) / i;
	}
	return result;
};
