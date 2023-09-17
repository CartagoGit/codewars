export const initBackSpacesInString = () => {
	return cleanString("abc#d##c");
};

export function cleanString(s: string): string {
	let result: string = "";
	for (let letter of Array.from(s))
		letter === "#" ? (result = result.slice(0, -1)) : (result += letter);
	return result;
}
