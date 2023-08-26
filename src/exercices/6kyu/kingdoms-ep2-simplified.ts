//* https://www.codewars.com/kata/6159dda246a119001a7de465/train/typescript

const PUNCTUATION_OMITTED = '?!.,';

export function translate(speech: string, vocabulary: string[]): string {
	const speechWords = speech.split(' ');
	const correctedSpeech = speechWords
		.map((speechWord) => {
			// Get punctuations before and after speech word
			const punctuationStart = speechWord.match(
				new RegExp(`^[${PUNCTUATION_OMITTED}]+`)
			) || [''];
			const punctuationEnd = speechWord.match(
				new RegExp(`[${PUNCTUATION_OMITTED}]+$`)
			) || [''];
			// Clean punctuation of censored word
			const speechWordWithoutPunctuation = speechWord.replace(
				new RegExp(`[${PUNCTUATION_OMITTED}]`, 'g'),
				''
			);
			const matchingWord = vocabulary.find((vocabularyWord) =>
				isMatching(speechWordWithoutPunctuation, vocabularyWord)
			);
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


