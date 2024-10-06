//* https://www.codewars.com/kata/56baeae7022c16dd7400086e/train/typescript

export const phone = (strng: string, num: string): string => {
	const errorMsgs = {
		toMany: (text: string) => `Error => Too many people: ${text}`,
		notFound: (text: string) => `Error => Not found: ${text}`,
	};
	const getInfoFormated = (data: {
		num: string;
		name: string;
		address: string;
	}) => {
		const { num, name, address } = data;
		return `Phone => ${num}, Name => ${name}, Address => ${address}`;
	};
	const linesFound = strng.split('\n').filter((line) => line.includes(num));
	if (linesFound.length === 0) return errorMsgs.notFound(num);
	if (linesFound.length > 1) return errorMsgs.toMany(num);
	const line = linesFound[0];
	const numPattern = /\+\d{1,2}-\d{3}-\d{3}-\d{4}/;
	const namePattern = /<([^>]+)>/;
	const numMatch = line.match(numPattern)?.[0].replace('+', '');
	const nameMatch = line.match(namePattern)?.[1];
	console.log({
		num: line.match(numPattern),
		name: line.match(namePattern),
	});
	if (!numMatch || !nameMatch) return errorMsgs.notFound(num);
	const addressMatch = line
		.replace(numMatch, '')
		.replace(nameMatch, '')
		.replace(/<|>/g, '')
		// .replace(/[^a-zA-Z0-9\s-]/g, '')
		.replace(/[^a-zA-Z0-9\s.,_-]/g, '')
  .split(' ')
		.filter((word) => word)
		.join(' ')
		.trim();
	console.log({ numMatch, nameMatch, addressMatch });
	return getInfoFormated({
		num: numMatch,
		name: nameMatch,
		address: addressMatch,
	});
};
