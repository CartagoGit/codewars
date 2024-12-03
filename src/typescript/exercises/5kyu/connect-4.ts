//* https://www.codewars.com/kata/586c0909c1923fdb89002031/train/typescript

type IPlayer = 1 | 2;
type IPosition = { row: number; col: number };
type IDirectionsForCheck = 'up' | 'upRight' | 'right' | 'downRight';

export class Connect4 {
	// ANCHOR : Properties
	public board = Array.from({ length: 6 }, () =>
		Array.from({ length: 7 }, () => 0)
	);

	public playerTurn: IPlayer = 1;

	public isGameFinished = false;

	// ANCHOR: Constructor

	constructor() {}

	// ANCHOR: Methods

	play(col: number): string {
		if (this.isGameFinished) return 'Game has finished!';
		for (let row = 0; row < this.board[0].length; row++) {
			if (this.board[row][col] !== 0) {
				if (row === this.board[0].length - 1) return 'Column full!';
				continue;
			}
			this.board[row][col] = this.playerTurn;
			break;
		}
		const isPlayerWins = this._checkWin();
		if (isPlayerWins) return `Player ${this.playerTurn} wins!`;
		const result = `Player ${this.playerTurn} has a turn`;
		this._changePlayerTurn();
		return result;
	}

	private _changePlayerTurn(): void {
		this.playerTurn = this.playerTurn === 1 ? 2 : 1;
	}

	private _checkWin(): boolean {
		const directions: Record<IDirectionsForCheck, IPosition> = {
			up: { row: -1, col: 0 },
			upRight: { row: -1, col: 1 },
			right: { row: 0, col: 1 },
			downRight: { row: 1, col: 1 },
		};
		for (let [rowIndex, row] of this.board.entries()) {
			for (let col of row) {
				if ([0, this.playerTurn === 1 ? 2 : 1].includes(col)) continue;
				for (let newPosition of Object.values(directions)) {
					let count = 0;
					let position: IPosition = { row: rowIndex, col };
					while (
						this.board[position.row]?.[position.col] ===
						this.playerTurn
					) {
						count++;
						position.row += newPosition.row;
						position.col += newPosition.col;
					}
					if (count >= 4) return true;
				}
			}
		}
		return false;
	}
}
