//* https://www.codewars.com/kata/615b636c3f8bcf0038ae8e8b/train/typescript

const PUNCTUATION_OMITTED = '?!.,';

export function translate(speech: string, vocabulary: string[]): string {
	if (speech === '') return '';
	const speechWords = speech.split(' ');

	// Get all possible words for each censored word
	let matchedWords: Record<string, string[]> = {};
	for (let speechWord of speechWords) {
		const speechWordWithoutPunctuation = speechWord.replace(
			new RegExp(`[${PUNCTUATION_OMITTED}]`, 'g'),
			''
		);
		matchedWords[speechWord] = vocabulary.filter((vocabWord) =>
			isMatching(speechWordWithoutPunctuation, vocabWord)
		);
	}

	// Get unique possibilities
	let uniquePossibilities: Record<string, string> = {};

	while (
		Object.keys(matchedWords).length > 0 &&
		Object.keys(uniquePossibilities).length <
			Object.keys(matchedWords).length
	) {
		for (let [word, possibilities] of Object.entries(matchedWords)) {
			if (uniquePossibilities[word]) continue;
			possibilities = possibilities.filter(
				(possibility) =>
					!Object.values(uniquePossibilities).includes(possibility)
			);
			if (possibilities.length === 1) {
				uniquePossibilities[word] = possibilities[0];
			}
		}
	}
	const correctedSpeech = speechWords
		.map((speechWord) => {
			// Get punctuations before and after speech word
			const punctuationStart = speechWord.match(
				new RegExp(`^[${PUNCTUATION_OMITTED}]+`)
			) || [''];
			const punctuationEnd = speechWord.match(
				new RegExp(`[${PUNCTUATION_OMITTED}]+$`)
			) || [''];

			const matchingWord = uniquePossibilities[speechWord];
			return matchingWord
				? punctuationStart[0] + matchingWord + punctuationEnd[0]
				: speechWord;
		})
		.join(' ');
	return correctedSpeech;
}

const isMatching = (censoredWord: string, vocabularyWord: string) => {
	if (censoredWord.length !== vocabularyWord.length) return false;
	const censoredChars = censoredWord.split('');
	for (let [index, char] of censoredChars.entries()) {
		if (char !== '*' && char !== vocabularyWord[index]) return false;
	}
	return true;
};
