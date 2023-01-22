/**
 * ? Formulas de famosas secuencias matematicas
 */

/**
 * ? Devuelve la seccuancia de Fibonacci, dandole el número de elementos que se desean
 * @param {number} [limit=100]
 * @returns {number[]}
 */
export const getFibonacciSecuence = (limit: number = 100): number[] => {
	function* generator(index: number = 0) {
		let first = index;
		let second = index + 1;
		while (index <= 1) yield index++;
		while (true) {
			const result = first + second;
			yield result;
			first = second;
			second = result;
		}
	}
	let counter = 0;
	const gen = generator();
	let sequence: number[] = [];
	while (counter < limit) {
		sequence.push(gen.next().value!);
		counter++;
	}
	return sequence || [];
};

/**
 * ? Devuelve el número de Fibonacci en la posición deseada siguiendo la formula de Binet
 * @param {number} position
 * @returns {number}
 * Formula de Binet: Fn=((1+5–√2)**n−(1−5–√2)**n)/√5
 * - IMPORTANTE -
 * El valor es exacto hasta la posicion 70. A partir de ahi empieza a haber deprecaciones 
 * en los decimales debido a la deprecacion de decimales en javascript al realizar raices cuadradas y con numeros muy elevados.
 * A parte hay que tener en cuenta que la formula de binet no es exacta, solo aproximada.
 */
export const getFibonacciPosition = (position: number): number => {
	const sqRootOf5 = Math.sqrt(5);
	const Phi = (1 + sqRootOf5) / 2;
	const phi = (1 - sqRootOf5) / 2;
	return Math.round(
		(Math.pow(Phi, position) - Math.pow(phi, position)) / sqRootOf5
	);
	// return Math.round(
	// 	(((1 + Math.sqrt(5)) / 2) ** position -
	// 		((1 - Math.sqrt(5)) / 2) ** position) /
	// 		Math.sqrt(5)
	// );
};

export const getPadovanSecuence = (): number[] => {
	return [];
};

export const getJacobstahlSecuence = (): number[] => {
	return [];
};

export const getPellSecuence = (): number[] => {
	return [];
};

export const getTribonacciSecuence = (): number[] => {
	return [];
};

export const getTetranacciSecuence = (): number[] => {
	return [];
};

const sequencies: {
	[key in string]: { name: string; getSequence: () => number[] };
} = {
	fib: {
		name: "fibonacci",
		getSequence: getFibonacciSecuence,
	},
	pad: {
		name: "padovan",
		getSequence: getPadovanSecuence,
	},
	jac: {
		name: "jacobstahl",
		getSequence: getJacobstahlSecuence,
	},
	pel: {
		name: "pell",
		getSequence: getPellSecuence,
	},
	tri: {
		name: "tribonacci",
		getSequence: getTribonacciSecuence,
	},
	tet: {
		name: "tetranacci",
		getSequence: getTetranacciSecuence,
	},
};
