//* https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf/train/typescript

export function catMouse(x: string, jump: number): string {
	if (['m', 'C', 'D'].some((animal) => !x.includes(animal)))
		return 'boring without all three';
	const cat = x.indexOf('C');
	const mouse = x.indexOf('m');
	const dog = x.indexOf('D');
	if (Math.abs(cat - mouse) > jump) return 'Escaped!';
	if (
		(mouse < cat && (cat < dog || dog < mouse)) ||
		(mouse > cat && (cat > dog || dog > mouse))
	)
		return 'Caught!';
	return 'Protected!';
}
