//* https://www.codewars.com/kata/5b02ae6aa2afd8f1b4001ba4/train/javascript

const getChance = (n, x, a) => {
	let possibility = 1;
    for (let i = 0; i < a; i++) 
        possibility *= (n - x) / n--;
	return Math.round(possibility * 100) / 100;
}
