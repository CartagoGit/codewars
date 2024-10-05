//* https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/typescript

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export function lastSurvivors(str: string): string {
	str = str.toLowerCase();
	let map = new Map<string, number>();
	str.split('').forEach((char) => map.set(char, (map.get(char) || 0) + 1));
	while ([...map.values()].some((val) => val > 1)) {
		for (let [key, value] of map) {
			if (value <= 1) continue;
			const index = alphabet.indexOf(key);
			const nextIndex = index + 1 === alphabet.length ? 0 : index + 1;
			const newValue = value % 2;
			const timesNewKey = Math.floor(value / 2);
			map.set(key, newValue);
			map.set(
				alphabet[nextIndex],
				(map.get(alphabet[nextIndex]) || 0) + timesNewKey
			);
		}
	}
	return [...map.entries()]
		.map(([key, value]) => (value ? key : ''))
		.join('');
}

const test =
	'xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh';
console.log(lastSurvivors(test)); // 'abcde'
