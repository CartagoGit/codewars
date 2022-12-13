export const towerBuilder = (nFloors: number): string[] => {
	const lineLength: number = nFloors * 2 - 1;
	let arrayTree: string[] = [];
	for (let row = 1; row <= nFloors; row++) {
		let line: string = "";
		const branchs: number = row * 2 - 1;
		const spacesEverySide: number = (lineLength - branchs) / 2;
		for (let column = 0; column < lineLength; column++) {
			if (column < spacesEverySide) line += " ";
			else if (column < spacesEverySide + branchs) line += "*";
			else line += " ";
		}
		arrayTree.push(line);
	}
	return arrayTree;
};
