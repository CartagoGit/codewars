//* https://www.codewars.com/kata/5b02ae6aa2afd8f1b4001ba4/train/javascript

/**
 * Get probability of laxative effect in a given number of shots.
 *
 * @param {number} shots - Shots.
 * @param {number} lax - Shoots with lax.
 * @param {number} times -  Drunk times.
 * @returns {number} Probability with two decimals.
 */
const getChance = (shoots, lax, times) => {
	const probability =
		calculateCombination(shoots - lax, times) /
		calculateCombination(shoots, times);
	return Math.round(probability * 100) / 100;
};

/**
 * Calculates the number of possible combinations.
 *
 * @param {number} shoots - Total number of elements.
 * @param {number} times - Number of elements to select in each combination.
 * @returns {number} - Number of possible combinations.
 */
const calculateCombination = (shoots, times) => {
	const factorial = (shoots) =>
		shoots > 1 ? shoots * factorial(shoots - 1) : 1;
	return factorial(times) / (factorial(times) * factorial(shoots - times));
};
