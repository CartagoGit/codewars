//* https://www.codewars.com/kata/615b636c3f8bcf0038ae8e8b/train/typescript

//* Characters that can be omitted from the beginning or end of a word
const PUNCTUATION_OMITTED = '?!.,';

//* Translate speech to the common language
export function translate(speech: string, vocabulary: string[]): string {
	if (speech === '') return '';
	const speechWords = speech.split(' ');
	// Get all possible words for each censored word
	const matchedWords = getMatchedWords(speechWords, vocabulary);
	// Get unique possibilities
	const uniquePossibilities = getUniquePossibilities(matchedWords);
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

//* Check if censored word matches vocabulary word
const isMatching = (censoredWord: string, vocabularyWord: string) => {
	if (censoredWord.length !== vocabularyWord.length) return false;
	const censoredChars = censoredWord.split('');
	for (let [index, char] of censoredChars.entries()) {
		if (char !== '*' && char !== vocabularyWord[index]) return false;
	}
	return true;
};

//* Get all possible words for each censored word
const getMatchedWords = (speechWords: string[], vocabulary: string[]) => {
	let matchedWords: Record<string, string[]> = {};
	for (let speechWord of speechWords) {
		const speechWordWithoutPunctuation = speechWord.replace(
			new RegExp(`[${PUNCTUATION_OMITTED}]`, 'g'),
			''
		);
		const vocabularyMatched = vocabulary.filter((vocabWord) =>
			isMatching(speechWordWithoutPunctuation, vocabWord)
		);
		if (vocabularyMatched.length === 0) continue;
		matchedWords[speechWord] = vocabularyMatched;
	}
	return matchedWords;
};

//* Get unique possibilities from matched words
const getUniquePossibilities = (
	matchedWords: Record<string, string[]>
): Record<string, string> => {
	if (
		Object.keys(matchedWords).length === 0 ||
		Object.values(matchedWords).every(
			(possibilities) => !possibilities || possibilities.length === 0
		)
	)
		return {};
	// Get unique possibilities
	let uniquePossibilities: Record<string, string> = {};

	while (
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
	return uniquePossibilities;
};
