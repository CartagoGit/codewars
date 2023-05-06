//* https://www.codewars.com/kata/566fc12495810954b1000030/train/typescript

export const initCountDigits = (): number => G964.nbDig(5750, 0);

export class G964 {
	public static nbDig = (num: number, digit: number): number => {
		let counter = 0;
		for (let i = 0; i <= num; i++) {
			const square = i * i;
			counter += (
				square.toString().match(new RegExp(digit.toString(), "g")) || []
			).length;
		}
		return counter;
	};
}
