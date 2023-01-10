const MORSE_CODE: { [key: string]: string } = {
	".-": "A",
	"-...": "B",
	"-.-.": "C",
	"-..": "D",
	".": "E",
	"..-.": "F",
	"--.": "G",
	"....": "H",
	"..": "I",
	".---": "J",
	"-.-": "K",
	".-..": "L",
	"--": "M",
	"-.": "N",
	"---": "O",
	".--.": "P",
	"--.-": "Q",
	".-.": "R",
	"...": "S",
	"-": "T",
	"..-": "U",
	"...-": "V",
	".--": "W",
	"-..-": "X",
	"-.--": "Y",
	"--..": "Z",
	"-----": "0",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
};

export const initDecodeMorse = (): string => {
	return decodeMorse(".... . -.--   .--- ..- -.. .");
};

export function decodeMorse(morseCode: string): string {
	const letterSpace = " ";
	const wordSpace = "   ";
	const listWords = morseCode.split(wordSpace);
	const phrase = listWords
		.map((word) => {
			return word
				.split(letterSpace)
				.map((char) => MORSE_CODE[char])
				.join("");
		})
		.join(" ");

	return phrase.trim();
}
