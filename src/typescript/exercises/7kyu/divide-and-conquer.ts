//* https://www.codewars.com/kata/57eaec5608fed543d6000021/train/typescript

export function divCon(x: (string | number)[]): number {
	const [notChainNums, chainNums] = x.reduce(
		(acc, num) => {
			if (typeof num === 'string') acc[0] += parseInt(num);
			else acc[1] += num;
			return acc;
		},
		[0, 0]
	);
	return chainNums - notChainNums;
}
