//* https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/typescript

export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
	if ([listOfArt.length, listOfCat.length].includes(0)) return '';
	let listResult: { cat: string; sun: number }[] = [];
	for (const cat of listOfCat) {
		const sum = listOfArt.reduce((acc, art) => {
			const num = art.split(' ')[1];
			const firstLetter = art[0];
			return acc + (firstLetter === cat ? +num : 0);
		}, 0);
		listResult.push({ cat, sun: sum });
	}
	return listResult.map(({ cat, sun }) => `(${cat} : ${sun})`).join(' - ');
};
