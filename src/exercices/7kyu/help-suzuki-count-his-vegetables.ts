/**
 * * https://www.codewars.com/kata/56ff1667cc08cacf4b00171b/train/typescript
 */

export const initCountVegetables = () => {
	// return countVegetables(
	// 	"potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage"
	// );
	return countVegetables(
		"mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber " +
			"mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber " +
			"onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper " +
			"onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot " +
			"potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip " +
			"mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip"
	);
};

const vegetablesList = [
	"cabbage",
	"carrot",
	"celery",
	"cucumber",
	"mushroom",
	"onion",
	"pepper",
	"potato",
	"tofu",
	"turnip",
];

export function countVegetables(s: string): [number, string][] {
	let arrayOfVegetablesNotSorted: [number, string][] = [];
	s.split(" ").forEach((vegetable) => {
		if (!vegetablesList.includes(vegetable)) return;
		const index = arrayOfVegetablesNotSorted.findIndex(
			([_counter, name]) => name.toLowerCase() === vegetable.toLowerCase()
		);
		if (index === -1) arrayOfVegetablesNotSorted.push([1, vegetable]);
		else {
			const [counter, name] = arrayOfVegetablesNotSorted[index];
			arrayOfVegetablesNotSorted[index] = [counter + 1, name];
		}
	});
	const counterArray = arrayOfVegetablesNotSorted.map(([counter]) => counter);

	const max = Math.max(...counterArray);
	let finalArray: [number, string][] = [];
	for (let i = max; i > 0; i--) {
		const everyNameWithThatNumOfVegetables = arrayOfVegetablesNotSorted
			.filter(([counter]) => counter === i)
			.map(([_counter, name]) => name);

		//* Order them Z -> A
		const orderThatVegetables = everyNameWithThatNumOfVegetables
			.sort()
			.reverse();

		orderThatVegetables.forEach((vegetable) => {
			finalArray.push([i, vegetable]);
		});
	}

	return finalArray;
}
