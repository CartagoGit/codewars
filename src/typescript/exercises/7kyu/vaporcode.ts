//* https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/typescript

export function vaporcode(str: string): string {
	return str.toUpperCase().replace(/\s/g, '').split('').join(' '.repeat(2));
}
