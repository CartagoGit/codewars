// Inspired from real-world Brainf**k, we want to create an interpreter of that language which will support the following instructions:
// https://www.codewars.com/kata/526156943dfe7ce06200063e/train/typescript

// > increment the data pointer (to point to the next cell to the right).
// < decrement the data pointer (to point to the next cell to the left).
// + increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
// - decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
// . output the byte at the data pointer.
// , accept one byte of input, storing its value in the byte at the data pointer.
// [ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command,
// jump it forward to the command after the matching ] command.
// ] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command,
// jump it back to the command after the matching [ command.
// The function will take in input...

// the program code, a string with the sequence of machine instructions,
// the program input, a string, possibly empty, that will be interpreted as an array of bytes using each
// character's ASCII code and will be consumed by the , instruction
// ... and will return ...

// the output of the interpreted code (always as a string), produced by the . instruction.
// Implementation-specific details for this Kata:

// Your memory tape should be large enough - the original implementation had 30,000 cells but a few thousand
// should suffice for this Kata
// Each cell should hold an unsigned byte with wrapping behavior (i.e. 255 + 1 = 0, 0 - 1 = 255), initialized to 0
// The memory pointer should initially point to a cell in the tape with a sufficient number
// (e.g. a few thousand or more) of cells to its right. For convenience, you may want to have it
// point to the leftmost cell initially
// You may assume that the , command will never be invoked when the input stream is exhausted
// Error-handling, e.g. unmatched square brackets and/or memory pointer going past the
// leftmost cell is not required in this Kata. If you see test cases that require you
// to perform error-handling then please open an Issue in the Discourse for this Kata
//  (don't forget to state which programming language you are attempting this Kata in).

export function initBrainLuck() {
	const result1 = brainLuck(
		",+[-.,+]",
		"Codewars" + String.fromCharCode(255)
	);
	console.log("❗initBrainLuck  ➽ result1 ➽ ⏩", result1);
	const result2 = brainLuck(",[.[-],]", "Codewars" + String.fromCharCode(0));
	console.log("❗initBrainLuck  ➽ result2 ➽ ⏩", result2);
	("Codewars");
	const result3 = brainLuck(
		",>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.",
		String.fromCharCode(8, 9)
	);
	console.log("❗initBrainLuck  ➽ result3 ➽ ⏩", result3);
	return "hecho";
}

export function brainLuck(code: string, input: string) {
	const data: number[] = [0];
	const instructions: string[] = Array.from(code);
	const maxBytes: number = 255;
	const minBytes: number = 0;
	let inputPointer: number = 0;
	let pointer: number = 0;
	let indexInstructions: number | undefined = 0;
	let output: string = "";
	const posibilities: { [key: string]: () => void } = {
		">": () => {
			pointer++;
			data[pointer] ??= minBytes;
		},
		"<": () => {
			pointer--;
			data[pointer] ??= minBytes;
		},
		"+": () => {
			data[pointer]++;
			data[pointer] > maxBytes && (data[pointer] = minBytes);
		},
		"-": () => {
			data[pointer]--;
			data[pointer] < minBytes && (data[pointer] = maxBytes);
		},
		"[": () => {
			if (data[pointer] !== 0) return;
			indexInstructions = getIndexNextBracket(
				indexInstructions as number,
				instructions
			);
			if (!indexInstructions)
				throw new Error("There aren't other next bracket");
		},
		"]": () => {
			if (data[pointer] === 0) return;
			indexInstructions = getIndexPreviousBracket(
				indexInstructions as number,
				instructions
			);
			if (!indexInstructions)
				throw new Error("There aren't other previus bracket");
		},
		".": () => {
			output += String.fromCharCode(data[pointer]);
		},
		",": () => {
			data[pointer] = input.charCodeAt(inputPointer);
			inputPointer++;
		},
	};

	while (indexInstructions < instructions.length) {
		const instruction = instructions[indexInstructions];
		posibilities[instruction]();
		indexInstructions++;
	}

	return output;
}

const getIndexNextBracket = (
	index: number,
	instructions: string[]
): number | undefined => {
	let brackets = 1;
	for (let i = index + 1; i < instructions.length; i++) {
		if (instructions[i] === "[") brackets++;
		else if (instructions[i] === "]") brackets--;
		if (brackets === 0) return i;
	}
	return undefined;
};

const getIndexPreviousBracket = (
	index: number,
	instructions: string[]
): number | undefined => {
	let brackets = 1;
	for (let i = index - 1; i >= 0; i--) {
		if (instructions[i] === "[") brackets--;
		else if (instructions[i] === "]") brackets++;
		if (brackets === 0) return i;
	}
	return undefined;
};
