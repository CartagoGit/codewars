//* https://www.codewars.com/kata/55b42574ff091733d900002f/train/typescript

export function friend(friends: string[]): string[] {
	return friends.filter((friend) => friend.length === 4);
}
