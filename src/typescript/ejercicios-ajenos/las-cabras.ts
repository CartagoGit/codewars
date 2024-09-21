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

const play = () => {
	let turn = 0;
	let tableState = [...table];
	// while (!isFinalResult(tableState)) {
	// 	tableState = movePiece({ tableState, turn });
	// 	turn++;
	// }
	console.log(`Game completed in ${turn} turns`);
};

const movePiece = (data: {
	tableState: Piece[];
	turn: number;
}): Piece[] | undefined => {
	const { tableState, turn } = data;
	for (let i = 0; i < tableState.length; i++) {
		if (tableState[i] === 'B' && tableState[i + 1] === 'V') {
            const newState = [...tableState];
			newState[i] = 'V';
			newState[i + 1] = 'B';
			const premutedTable = movePiece({
				tableState: newState,
				turn: turn + 1,
			});
			if (!!premutedTable) return premutedTable;
		}
		if (tableState[i] === 'N' && tableState[i - 1] === 'V') {
			newState[i] = 'V';
			newState[i - 1] = 'N';
			break;
		}
		if (
			tableState[i] === 'B' &&
			tableState[i + 2] === 'V' &&
			tableState[i + 1] === 'N'
		) {
			newState[i] = 'V';
			newState[i + 2] = 'B';
			break;
		}
		if (
			tableState[i] === 'N' &&
			tableState[i - 2] === 'V' &&
			tableState[i - 1] === 'B'
		) {
			newState[i] = 'V';
			newState[i - 2] = 'N';
			break;
		}
	}
	return newState;
};

const isFinalResult = (tableState: Piece[]): boolean => {
	for (let i = 0; i < table.length; i++) {
		if (tableState[i] !== finalResult[i]) return false;
	}
	return true;
};
