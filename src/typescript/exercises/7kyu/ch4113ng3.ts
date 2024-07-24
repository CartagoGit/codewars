//* https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/typescript

export function nerdify(txt: string): string {
	return txt
		.split('')
		.map((char) => {
			const dictionary: Record<string, string> = {
				a: '4',
                A: '4',
				e: '3',
                E: '3',
				l: '1',
			};
			return dictionary[char] ?? char;
		})
		.join('');
}
