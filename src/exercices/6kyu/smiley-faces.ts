//* https://www.codewars.com/kata/583203e6eb35d7980400002a/typescript

//return the total number of smiling faces in the array
export function countSmileys(arr: string[]): number {
	const smileys = arr.filter((face) => {
		let isSmiley = true;
		//* Face must be 2 or 3 characters long
		if (face.length < 2 || face.length > 3) isSmiley = false;
		//* Face must finish with ')' or 'D'
		else if (face[face.length - 1] !== ')' && face[face.length - 1] !== 'D')
			isSmiley = false;
		//* Face must start with ':' or ';'
		else if (face[0] !== ':' && face[0] !== ';') isSmiley = false;
		//* If face is 3 characters long, the middle character must be '-' or '~'
		else if (face.length === 3 && face[1] !== '-' && face[1] !== '~')
			isSmiley = false;
		return isSmiley;
	});
	return smileys.length;
}
