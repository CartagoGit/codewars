//* https://www.codewars.com/kata/57d4e99bec16701a67000033/train/typescript

const dictionary = { A: 'Ä', E: 'Ë', I: 'Ï', O: 'Ö', U: 'Ü', Y: 'Ÿ', a: 'ä', e: 'ë', i: 'ï', o: 'ö', u: 'ü', y: 'ÿ' };

export function heavyMetalUmlauts(boringText: string): string {
	return boringText.replace(
		/[AEIOUYaeiouy]/g,
		(match) => dictionary[match as keyof typeof dictionary]
	);
}
