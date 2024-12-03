//* https://www.codewars.com/kata/586c0909c1923fdb89002031/train/typescript

type IPlayer = '1' | '2';

export class Connect4 {
    // ANCHOR : Properties
	public board = Array.from({ length: 6 }, () =>
		Array.from({ length: 7 }, () => 0)
	);

	private _playerTurn: IPlayer = '1';
	get playerTurn(): IPlayer {
		return this._playerTurn;
	}
	set playerTurn(_player: IPlayer) {
		this._is1Turn = _player === '1';
		this._playerTurn = _player;
	}

	private _is1Turn: boolean = true;
	get is1Turn(): boolean {
		return this._is1Turn;
	}

    // ANCHOR: Constructor

	constructor() {}

    // ANCHOR: Methods

	play(col: number): string {
		// Good luck

        let result: string;

        result = `Player ${this.playerTurn} has a turn`;
        this._changePlayerTurn();
        return result;
	}

	private _changePlayerTurn(): void {
		this.playerTurn = this.is1Turn ? '2' : '1';
	}
}
