// Este ejercicio es un ejercicio sacado de la fiesta fenicia, que Olga me ha pasado por si se podia resolver

//* Las Cabras
// Hay que invertir las fichas de sitio: las blancas al sitio de las negras y las negras al sitio de las blancas, solo se puede mover hacea delante una casilla o saltar una ficha de color contrario, no se puede saltar dos fichas ni volver atras...

// si fuera un array seria algo asi
// B = Blanco
// N = Negro
// V = Vacio

// [B, B, B, B, V, N, N, N, N ]

type Piece = 'B' | 'V' | 'N';

const table: Piece[] = ['B', 'B', 'B', 'B', 'V', 'N', 'N', 'N', 'N'];
const finalResult: Piece[] = ['N', 'N', 'N', 'N', 'V', 'B', 'B', 'B', 'B'];

// Posibilidades de saltar 1 o 2, y de que cambie el estado del tablero
const possibilites = (data: { tableState: Piece[]; i: number }) => {
	const { tableState, i } = data;
	return {
		BJumpOne: {
			condition: tableState[i] === 'B' && tableState[i + 1] === 'V',
			result: (actualState: Piece[]): Piece[] => {
				const newState = [...actualState];
				newState[i] = 'V';
				newState[i + 1] = 'B';
				return newState;
			},
		},
		BJumpTwo: {
			condition:
				tableState[i] === 'B' &&
				tableState[i + 2] === 'V' &&
				tableState[i + 1] === 'N',
			result: (actualState: Piece[]): Piece[] => {
				const newState = [...actualState];
				newState[i] = 'V';
				newState[i + 2] = 'B';
				return newState;
			},
		},
		NJumpOne: {
			condition: tableState[i] === 'N' && tableState[i - 1] === 'V',
			result: (actualState: Piece[]): Piece[] => {
				const newState = [...actualState];
				newState[i] = 'V';
				newState[i - 1] = 'N';
				return newState;
			},
		},
		NJumpTwo: {
			condition:
				tableState[i] === 'N' &&
				tableState[i - 2] === 'V' &&
				tableState[i - 1] === 'B',
			result: (actualState: Piece[]): Piece[] => {
				const newState = [...actualState];
				newState[i] = 'V';
				newState[i - 2] = 'N';
				return newState;
			},
		},
	};
};

let path: Piece[][] = [];

const play = () => {
	const { tableState, turn } =
		movePiece({ tableState: [...table], turn: 0 }) || {};
	if (!tableState) throw new Error('No se ha encontrado solución');
	console.log(`Juego completado en ${turn} turnos => `, tableState);
	const pathFinal = path.map((tableState, index) => {
		const dictionary = {
			B: '🔘',
			V: '🚫',
			N: '🟤',
		};
		return {
			turn: index,
			table: tableState.map((piece) => dictionary[piece]),
		};
	});
	console.log(`El camino recorrido para ganar el juego =>`, pathFinal);
};

// Funcion recursiva para mover pieza
const movePiece = (data: {
	tableState: Piece[];
	turn: number;
}): { tableState: Piece[]; turn: number } | undefined => {
	const { tableState, turn } = data;
	path.push(tableState);
	// Si es el resultado final, retornamos el estado de la mesa
	if (isFinalResult(tableState)) return data;
	for (let i = 0; i < tableState.length; i++) {
		// Chequeamos las condiciones para mover la pieza
		const isConditionToMove = Object.values(
			possibilites({ tableState, i })
		).some((possibility) => possibility.condition);
		if (!isConditionToMove) continue;

		// Si se puede mover, vemos que posibilidades tenemos
		const conditions = Object.values(
			possibilites({ tableState, i })
		).filter((possibility) => !!possibility.condition);

		// Recorremos las posibilidades y volvemos a llamar a mover pieza por cada posibilidad
		for (let condition of conditions) {
			const newState = condition.result(tableState);
			const premutedTable = movePiece({
				tableState: newState,
				turn: turn + 1,
			});
			// Si encontramos una solucion, retornamos el estado de la mesa
			if (!!premutedTable) return premutedTable;
		}
	}
	path.pop();
	// Si en esta recursividad no encontramos solucion, retornamos undefined, porque no tenemos solución por este camino
	return;
};

const isFinalResult = (tableState: Piece[]): boolean => {
	for (let i = 0; i < table.length; i++) {
		if (tableState[i] !== finalResult[i]) return false;
	}
	return true;
};

// Accionamos el juego

play();
