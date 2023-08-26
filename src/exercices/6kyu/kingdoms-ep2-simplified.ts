//* https://www.codewars.com/kata/6159dda246a119001a7de465/train/typescript

export function translate(speech: string, vocabulary: string[]): string {
	const speechWords = speech.split(' ');
	const correctedSpeech = speechWords
		.map((speechWord) => {
			const matchingVocabulary = vocabulary.find((vocabWord) =>
				isMatching(speechWord, vocabWord)
			);
			return matchingVocabulary || speechWord;
		})
		.join(' ');
	return correctedSpeech;
}

const isMatching = (censoredWord: string, vocabularyWord: string) => {
    // Clean punctuation of censored word
    const censoredWordWithoutPunctuation = censoredWord.replace(/[?!.,]/g, '');
	if (censoredWordWithoutPunctuation.length !== vocabularyWord.length) return false;
	const censoredChars =censoredWordWithoutPunctuation.split('');
	for (let [index, char] of censoredChars.entries()) {
		if (char !== '*' && char !== vocabularyWord[index]) return false;
	}
	return true;
};
