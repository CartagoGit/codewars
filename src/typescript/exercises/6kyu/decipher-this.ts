export const initDecipherThis = () => {
	return decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o");
};

export function decipherThis(str: string): string {
	const words : string [] = str.split(" ");

	const chars : string [] = words.map((word) => {
		let numChar: number;
		let counter: number = 3;
		let auxWord: string;
		while (counter !== 0) {
			auxWord = word.slice(counter);
			numChar = Number(word.slice(0, counter));
			if (!isNaN(numChar)) break;
			counter--;
		}
		const [first, last] : [string, string] = [
			auxWord![0] || "",
			auxWord![auxWord!.length - 1] || "",
		];
		const middle : string = auxWord!.slice(1, auxWord!.length - 1);
		const resultMap :string =
			String.fromCharCode(numChar!) +
			(auxWord!.length !== 1 ? last + middle + first : first);
		return resultMap;
	});

	const result : string = chars.join(" ");

	return result;
}
