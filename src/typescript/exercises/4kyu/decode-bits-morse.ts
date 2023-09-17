import { decodeMorse } from "../6kyu/decode-morse";
import { getGreatestCommonDivisior } from "../../typescript/helpers/greatest-common-divisor";

export const initDecodeMorse = (): string => {
	// return decodeMorse(".... . -.--   .--- ..- -.. .");
	// return decodeMorse(
	// 	decodeBits(
	// 		"1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
	// 	)
	// );
	// return decodeMorse(decodeBits("000000011100000"));
	return decodeMorse(decodeBits("000000011100000"));
};

export const getRepeatedChains = (chain: string): string[] => {
	const arrayChain: string[] = chain.split("");
	const repeatedChains: string[] = [];
	let supportiveChain: string = "";

	for (const char of arrayChain) {
		if (
			supportiveChain.length === 0 ||
			supportiveChain[supportiveChain.length - 1] === char
		)
			supportiveChain += char;
		else {
			repeatedChains.push(supportiveChain);
			supportiveChain = char;
		}
	}

	repeatedChains.push(supportiveChain);
	return repeatedChains;
};

export const getPureBits = (bits: string): string => {
	const repeatedChains: string[] = getRepeatedChains(bits);

	const lenghtRepeatedChains: number[] = repeatedChains.map(
		(chain) => chain.length
	);

	const greatestCommonDivisior: number =
		getGreatestCommonDivisior(lenghtRepeatedChains)!;

	const morseCode: string = repeatedChains
		.map((chain) =>
			chain.substring(0, chain.length / greatestCommonDivisior)
		)
		.join("")
		.trim();
	return morseCode;
};

export const decodeBits = (bits: string) => {
	bits = getPureBits(bits);
	if (bits.charAt(0) === "0" && bits.charAt(bits.length - 1) === "0") {
		let auxiliarBits: string[] = bits.split("");
		while (auxiliarBits[0] === "0") auxiliarBits.splice(0, 1);
		while (auxiliarBits[auxiliarBits.length - 1] === "0")
			auxiliarBits.splice(-1, 1);
		if (!auxiliarBits.includes("0") && auxiliarBits.includes("1"))
			return ".";
		bits = auxiliarBits.join("");
	}

	let isStationOn: boolean = false;
	let morseString: string = "";
	while ((bits.includes("1") || bits.includes("0")) && bits.length !== 0) {
		const firstNumber: string = bits.substring(0, 1);
		let counter: number = 0;
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
		} else bits = bits.substring(1);
	}
	return morseString.trim();
};
