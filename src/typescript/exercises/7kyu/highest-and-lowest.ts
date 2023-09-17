export class Kata {
	static highAndLow(numbers: string): string {
		let max: number | undefined;
		let min: number | undefined;
		numbers.split(" ").forEach((numS) => {
			const num: number = Number(numS);
			(!max || num >= max) && (max = num);
			(!min || num <= min) && (min = num);
		});
		return max?.toString() + " " + min?.toString();
	}
}
