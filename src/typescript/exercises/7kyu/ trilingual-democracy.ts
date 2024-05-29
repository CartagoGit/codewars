//* https://www.codewars.com/kata/62f17be8356b63006a9899dc/train/typescript

// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set

const langs = ['D', 'F', 'I', 'K'];

export function trilingualDemocracy(group: string): string {
	let langCount: Record<string, number> = {};
	for (let speaker of group.split('')) {
		langCount[speaker] = (langCount[speaker] || 0) + 1;
	}
	const quantity = Object.values(langCount);
	if (quantity.length === 1) return group[0];
	if (quantity.length === 2)
		return Object.keys(langCount).find((key) => langCount[key] === 1)!;
	return langs.find((lang) => !langCount[lang])!;
}
