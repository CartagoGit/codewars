//* https://www.codewars.com/kata/58989a079c70093f3e00008d/train/typescript

export const cartesianNeighbor = (x: number, y: number): number[][] => [
	[x - 1, y - 1],
	[x - 1, y],
	[x - 1, y + 1],
	[x, y - 1],
	[x, y + 1],
	[x + 1, y - 1],
	[x + 1, y],
	[x + 1, y + 1],
];

// export function cartesianNeighbor(x: number, y: number): number[][] {
// 	let result: number[][] = [];
// 	for (let neighborX = x - 1; neighborX <= x + 1; neighborX++) {
// 		for (let neighborY = y - 1; neighborY <= y + 1; neighborY++) {
// 			if (neighborX === x && neighborY === y) continue;
// 			result.push([neighborX, neighborY]);
// 		}
// 	}
// 	return result;
// }
