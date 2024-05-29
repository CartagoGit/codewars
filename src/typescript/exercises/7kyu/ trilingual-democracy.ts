//* https://www.codewars.com/kata/62f17be8356b63006a9899dc/train/typescript

// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set

export function trilingualDemocracy(group: string): string {
    const langs = ['D', 'F', 'I', 'K'];
	const diffLangs = new Set(group);
	const possibilities: Record<number, string> = {
		1: group[0],
		2: [...group].find(
			(char) => group.indexOf(char) === group.lastIndexOf(char)
		)!,
		3: langs.find((lang) => !diffLangs.has(lang))!,
	};
	return possibilities[diffLangs.size];
}
