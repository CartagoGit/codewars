//* https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript

export function warnTheSheep(queue: string[]): string {
	const wolfIndex = queue.findIndex((animal) => animal === "wolf");
	if (wolfIndex === queue.length - 1) {
		return "Pls go away and stop eating my sheep";
	}
	return `Oi! Sheep number ${
		queue.length - wolfIndex - 1
	}! You are about to be eaten by a wolf!`;
}
