import { MORSE_CODE } from "../../helpers/morse-code.helper";

export const initDecodeMorse = (): string => {
	return decodeMorse(".... . -.--   .--- ..- -.. .");
};

export function decodeMorse(morseCode: string): string {
	const letterSpace: string = " ";
	const wordSpace: string = "   ";
	const listWords: string[] = morseCode.split(wordSpace);
	const phrase: string = listWords
		.map((word: string) => {
			return word
				.split(letterSpace)
				.map((char: string) => MORSE_CODE[char])
				.join("");
		})
		.join(" ");

	return phrase.trim();
}
