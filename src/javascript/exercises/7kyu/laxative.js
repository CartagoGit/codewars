//* https://www.codewars.com/kata/5b02ae6aa2afd8f1b4001ba4/train/javascript

/**
 * Get the probability of a laxative effect in a given number of shots.
 *
 * @param {number} shots - Total shots.
 * @param {number} lax - Shots with laxative effect.
 * @param {number} times - Number of times the shots are drunk.
 * @returns {number} Probability with two decimal places.
 */
const getChance = (shots, lax, times) => {
	const probability =
		calculateCombination(shots - lax, times) /
		calculateCombination(shots, times);
	return Math.round(probability * 100) / 100;
};

/**
 * Calculates the number of possible combinations.
 *
 * @param {number} elements - Total number of elements.
 * @param {number} selection - Number of elements to select in each combination.
 * @returns {number} - Number of possible combinations.
 */
const calculateCombination = (elements, selection) => {
	const factorial = (num) => (num > 1 ? num * factorial(num - 1) : 1);
	return (
		factorial(elements) /
		(factorial(selection) * factorial(elements - selection))
	);
};
