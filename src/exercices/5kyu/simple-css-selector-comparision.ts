//* https://www.codewars.com/kata/5379fdfad08fab63c6000a63/train/typescript

//* Comparator for weight css selectors
export function compare(a: string, b: string): string {
	const { tags: aTags, ids: aIds, classes: aClasses } = getWeight(a);
	const { tags: bTags, ids: bIds, classes: bClasses } = getWeight(b);
	if (aIds !== bIds) return aIds > bIds ? a : b;
	else if (aClasses !== bClasses) return aClasses > bClasses ? a : b;
	else if (aTags !== bTags) return aTags > bTags ? a : b;
	return b;
}

//* Get weight of css selector
const getWeight = (
	selectors: string
): { tags: number; ids: number; classes: number } => {
	const count = selectors
		.split(/(?=[#\. ])/)
		.filter((selector) => selector !== ' ')
		.map((selector) => (selector = selector.trim()))
		.reduce(
			(acc, selector) => {
				if (selector.includes('#')) acc.ids += 1;
				else if (selector.includes('.')) acc.classes += 1;
				else if (selector !== '*') acc.tags += 1;
				return acc;
			},
			{ tags: 0, ids: 0, classes: 0 }
		);

	return count;
};
