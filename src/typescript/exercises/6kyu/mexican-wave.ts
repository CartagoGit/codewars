export const initMexicanWave = () => {
	const prompt = "";
	return wave(prompt);
};

export const wave = (str: string): Array<string> => {
	const text = str.trim().toLowerCase();
	const result: string[] = [];
	for (let i = 0; i < text.length; i++) {
		if (text[i] === " ") continue;
		result.push(
			text.slice(0, i) + text[i].toUpperCase() + text.slice(i + 1)
		);
	}
	return result;
};
