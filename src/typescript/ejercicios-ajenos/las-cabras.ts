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
    while(!isFinalResult(tableState)){
        turn++;
        
    }
};

const isFinalResult = (tableState: Piece[]): boolean => {
	for (let i = 0; i < table.length; i++) {
		if (tableState[i] !== finalResult[i]) return false;
	}
	return true;
};
