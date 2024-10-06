//* https://www.codewars.com/kata/56baeae7022c16dd7400086e/train/typescript

export const phone = (strng: string, num: string): string => {
	const errorMsgs = {
		toMany: (text: string) => `Error => Too many people: ${text}`,
		notFound: (text: string) => `Error => Not found: ${text}`,
	};
	const linesFound = strng.split('\n').filter((line) => line.includes(num));
	if (linesFound.length === 0) return errorMsgs.notFound(num);
	if (linesFound.length > 1) return errorMsgs.toMany(num);
	const line = linesFound[0];
	console.timeLog('line => ', line, linesFound);
	// const pattern = /\+\d{1,2}-\d{3}-\d{3}-\d{4}|<([^>]+)>|([A-Za-z0-9\s]+(?:\s[A-Za-z0-9\s]+)*)/;
	// const matches = line.match(pattern);
	// console.log(matches);
	const numPattern = /\+\d{1,2}-\d{3}-\d{3}-\d{4}/;
	const namePattern = /<([^>]+)>/;
	const addressPattern =
		/(?:\+\d{1,2}-\d{3}-\d{3}-\d{4}\s+)?(?:<[^>]+>\s+)?(.+)/;

	const numMatch = line.match(numPattern)?.[0] ?? return errorMsgs.notFound(num);
	const nameMatch = line.match(namePattern)?.[1];
	const addressMatch = line.match(addressPattern);
	console.log({
		numMatch,
		nameMatch,
		addressMatch,
	});
	// your code
	return '...';
};
