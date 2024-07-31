//* https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a/train/typescript

export function golfScoreCalculator(
	parList: string,
	scoreList: string
): number {
	return parList
		.split('')
		.reduce(
			(acc, par, index) => acc + (Number(scoreList[index]) - Number(par)),
			0
		);
}
