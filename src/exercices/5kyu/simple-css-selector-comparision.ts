//* https://www.codewars.com/kata/5379fdfad08fab63c6000a63/train/typescript

type Tags =
	| 'div'
	| 'p'
	| 'span'
	| 'section'
	| 'main'
	| 'footer'
	| 'header'
	| 'nav'
	| 'body'
	| 'html';

//* Comparator for weight css selectors
export function compare(a: string, b: string): string {
	const aWeight = getWeight(a);
	const bWeight = getWeight(b);
	return aWeight > bWeight ? a : b;
}

//* Get weight of css selector
const getWeight = (selector: string): number => {
	const selectors = selector.split(' ');
	const weight = selectors.reduce(
		(acc, selector) => acc + getSelectorWeight(selector),
		0
	);
	return weight;
};

//* Get weight of selector
const getSelectorWeight = (selector: string): number => {
	const [tag, id, classes] = selector.split(/(?=#|\.)/);
	if (tag) return getTagWeight(tag as Tags);
	else if (id) return getIdWeight(id);
	else if (classes) return getClassesWeight(classes);
	else return 0;
};

//* Get weight of tag
const getTagWeight = (tag: Tags): number => {
	const tagWeight: Record<Tags, number> = {
		div: 1,
		p: 2,
		span: 3,
		section: 4,
		main: 5,
		footer: 6,
		header: 7,
		nav: 8,
		body: 9,
		html: 10,
	};
	return tagWeight[tag] || 0;
};

//* Get weight of id
const getIdWeight = (id: string): number => {
	return id ? 100 : 0;
};

//* Get weight of classes
const getClassesWeight = (classes: string): number => {
	return classes ? classes.split('.').length * 10 : 0;
};
