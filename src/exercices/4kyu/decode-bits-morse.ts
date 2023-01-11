
import { decodeMorse } from "../6kyu/decode-morse";

export const initDecodeMorse = (): string => {
	// return decodeMorse(".... . -.--   .--- ..- -.. .");
	return decodeMorse(
		decodeBits(
			"1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
		)
	);
};

export const decodeBits = (bits: string) => {
	let isStationOn = false;

	let morseString = "";
	while ((bits.includes("1") || bits.includes("0")) && bits.length !== 0) {
		const firstNumber = bits.substring(0, 1);
		let counter = 0;
		if (!isStationOn && firstNumber === "1") {
			isStationOn = true;
			while (bits.substring(0, 1) !== "0" && bits.length !== 0) {
				bits = bits.replace("1", "");
				counter++;
			}
			morseString += counter > 2 ? "-" : ".";
		} else if (!!isStationOn && firstNumber === "0") {
			isStationOn = false;
			while (bits.substring(0, 1) !== "1" && bits.length !== 0) {
				bits = bits.replace("0", "");
				counter++;
			}
			morseString += counter < 3 ? "" : counter < 7 ? " " : "   ";
		}
	}
	return morseString.trim();
};


