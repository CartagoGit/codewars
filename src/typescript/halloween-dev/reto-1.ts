//* https://www.halloween.dev/es/retos/2024/1

function createMagicPotion(
	potions: number[],
	target: number
): number[] | undefined {
	let maped = new Map();
	for (let [index, potion] of potions.entries()) {
		let diff = target - potion;
		if (maped.has(diff)) return [maped.get(diff), index];
		maped.set(potion, index);
	}
}
