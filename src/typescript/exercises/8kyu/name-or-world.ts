//* https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/typescript

export function hello(name: string = ''): string {
	name = name.trim() || "world";
	return `Hello, ${
		name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
	}!`;
}
