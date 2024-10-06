//* https://www.codewars.com/kata/56baeae7022c16dd7400086e/train/typescript

export const phone = (strng: string, num: string): string => {
	const errorMsgs = {
		toMany: (num: string) => `Error => Too many people: ${num}`,
		notFound: (num: string) => `Error => Not found: ${num}`,
	};
	const linesFound = strng.split('\n').filter((line) => line.includes(num));
	if (linesFound.length === 0) return errorMsgs.notFound(num);
	if (linesFound.length > 1) return errorMsgs.toMany(num);
	const line = linesFound[0];
	console.timeLog('line => ', line, linesFound);
	const pattern = /\+(\d{1,2})-(\d{3})-(\d{3})-(\d{4})\s+<([^>]+)>\s+(.*)/;
	console.log(line.match(pattern));
	// your code
	return '...';
};
