/**
 * $ Formulas de famosas secuencias matematicas
 * * https://oeis.org/
 */

/**
 * ? Devuelve la secuencia de Fibonacci, dandole el número de elementos que se desean
 * @param {number} [limit=100]
 * @returns {number[]}
 */
export const getFibonacciSequence = (limit: number = 100): number[] => {
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
	while (counter <= limit) {
		sequence.push(gen.next().value!);
		counter++;
	}
	return sequence;
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
	//* Aplicación de la formula tal cual sin optimización
	// return Math.round(
	// 	(((1 + Math.sqrt(5)) / 2) ** position -
	// 		((1 - Math.sqrt(5)) / 2) ** position) /
	// 		Math.sqrt(5)
	// );
};

/**
 * ? Devuelve el índice del número de Fibonacci
 * @param {number} numOfFibonacci
 * @returns {number}
 * - IMPORTANTE -
 * El valor devuelto es un indice aproximado cercano al indice real más cercano.
 * - Ejemplo: 9 no es número de Fibonacci, pero 8 sí, en la sexta posición.
 *  El cálculo de 9 devuelve el indice más cercano, en este caso devuelve 6.
 */
export const getFibonacciIndex = (numOfFibonacci: number): number => {
	if (numOfFibonacci === 0) return 0;
	const completeNumber = 2.078087 * Math.log(numOfFibonacci) + 1.672276;
	const result = Math.round(completeNumber);
	return result;
};

/**
 * ? Devuelve la secuencia de Padovan, dandole el número de elementos que se desean
 * @param {number} [limit=100]
 * @returns {number[]}
 */
export const getPadovanSequence = (limit: number = 100): number[] => {
	const sequence: number[] = [];
	for (let i = 0; i <= limit; i++) {
		if (i === 0) {
			sequence.push(1);
			continue;
		} else if (i === 1 || i === 2) {
			sequence.push(0);
			continue;
		}
		sequence.push(sequence[i - 2] + sequence[i - 3]);
	}
	return sequence;
};

/**
 * ? Devuelve la secuencia de Jacobstah, dandole el número de elementos que se desean
 * @param {number} [limit=100]
 * @returns {number[]}
 */
export const getJacobstahlSequence = (limit: number = 100): number[] => {
	const sequence: number[] = [];
	for (let i = 0; i <= limit; i++) {
		if (i < 2) {
			sequence.push(i);
			continue;
		}
		sequence.push(sequence[i - 1] + 2 * sequence[i - 2]);
	}
	return sequence;
};

/**
 * ? Devuelve el número de Jacobstah en la posición deseada
 * @param {number} position
 * @returns {number}
 */
export const getJacobstahPosition = (position: number) => {
	return (2 ** position - (-1) ** position) / 3;
};

/**
 * ? Devuelve la secuencia de Pell, dandole el número de elementos que se desean
 * @param {number} [limit=100]
 * @returns {number[]}
 */
export const getPellSequence = (limit: number = 100): number[] => {
	const sequence: number[] = [];
	for (let i = 0; i <= limit; i++) {
		if (i < 2) {
			sequence.push(i);
			continue;
		}
		const numberOfPell = 2 * sequence[i - 1] + sequence[i - 2];
		sequence.push(numberOfPell);
	}
	return sequence;
};

/**
 * ? Devuelve la secuencia de Tribonacci, dandole el número de elementos que se desean
 * @param {number} [limit=100]
 * @returns {number[]}
 */
export const getTribonacciSequence = (limit: number = 100): number[] => {
	const sequence: number[] = [];
	for (let i = 0; i <= limit; i++) {
		if (i === 0 || i === 1) {
			sequence.push(0);
			continue;
		} else if (i === 2) {
			sequence.push(1);
			continue;
		}
		sequence.push(sequence[i - 1] + sequence[i - 2] + sequence[i - 3]);
	}
	return sequence;
};

/**
 * ? Devuelve la secuencia de Tetranacci, dandole el número de elementos que se desean
 * @param {number} [limit=100]
 * @returns {number[]}
 */
export const getTetranacciSequence = (limit: number = 100): number[] => {
	const sequence: number[] = [];
	for (let i = 0; i <= limit; i++) {
		if (i === 0 || i === 1 || i === 2) {
			sequence.push(0);
			continue;
		} else if (i === 3) {
			sequence.push(1);
			continue;
		}
		sequence.push(
			sequence[i - 1] +
				sequence[i - 2] +
				sequence[i - 3] +
				sequence[i - 4]
		);
	}
	return sequence;
};

/**
 * ? Objeto con secuencias mátematicas por sus siglas
 * @type {{
	[key in string]: { name: string; getSequence: () => number[] };
}}
 */
export const sequences: {
	[key in string]: { name: string; getSequence: () => number[] };
} = {
	fib: {
		name: "fibonacci",
		getSequence: getFibonacciSequence,
	},
	pad: {
		name: "padovan",
		getSequence: getPadovanSequence,
	},
	jac: {
		name: "jacobstahl",
		getSequence: getJacobstahlSequence,
	},
	pel: {
		name: "pell",
		getSequence: getPellSequence,
	},
	tri: {
		name: "tribonacci",
		getSequence: getTribonacciSequence,
	},
	tet: {
		name: "tetranacci",
		getSequence: getTetranacciSequence,
	},
};
