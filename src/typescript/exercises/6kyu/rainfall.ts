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
	const townsData = chain.split('\n').map((townData) => townData.split(':'));
	const [_townName, months] =
		townsData.find(([name, _data]) => name === town) ?? [];
	if (!months) return [];
	const monthsData = months
		.split(',')
		.map((data) => parseFloat(data.split(' ')[1]));
	return monthsData;
};
