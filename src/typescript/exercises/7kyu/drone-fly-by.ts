//* https://www.codewars.com/kata/58356a94f8358058f30004b5/train/typescript

export function flyBy(lamps: string, drone: string): string {
	return drone.length >= lamps.length
		? 'o'.repeat(lamps.length)
		: 'o'.repeat(drone.length) + lamps.slice(drone.length);
}
