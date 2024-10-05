//* https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/typescript

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export function lastSurvivors(str: string): string {
	let map = new Map<string, number>();
	str.split('').forEach((char) => map.set(char, (map.get(char) || 0) + 1));
    while([...map.values()].some(val => val > 1)) {
        for(let [key, value] of map) {
            
        }
    }
	return '';
}

const test = 'xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh'
console.log(lastSurvivors(test)); // 'abcde'