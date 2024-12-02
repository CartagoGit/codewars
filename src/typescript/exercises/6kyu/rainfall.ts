//* https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/train/typescript

export const mean = (town: string, chain: string): number => {
	const townData = getParsedTownData(town, chain);
	if (!townData.length) return -1;
	return townData.reduce((acc, curr) => acc + curr, 0) / townData.length;
};

export const variance = (town: string, chain: string): number => {
	const townData = getParsedTownData(town, chain);
	if (!townData.length) return -1;
	return (
		townData.reduce(
			(acc, curr) => acc + Math.pow(curr - mean(town, chain), 2),
			0
		) / townData.length
	);
};

const getParsedTownData = (town: string, chain: string): number[] => {
	const townData = chain.split('\n').find((data) => data.startsWith(town));
	if (!townData) return [];
	const monthsData = townData
		.split(':')[1]
		.split(',')
		.map((data) => parseFloat(data.split(' ')[1]));
	return monthsData;
};
