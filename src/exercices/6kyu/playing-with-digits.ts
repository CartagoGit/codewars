export const initPLayingWithDigits = () => {
	return G964.digPow(89, 1);
};

export class G964 {
	public static digPow = (n: number, p: number): number => {
		const nums: number[] = n
			.toString()
			.split("")
			.map((num) => Number(num));
		const powNums: number[] = nums.map((num) => Math.pow(num, p++));
        const sumPowNums: number = powNums.reduce((a, b) => a + b);
        const k: number = sumPowNums / n;
        return Number.isInteger(k) ? k : -1;
	};
}
