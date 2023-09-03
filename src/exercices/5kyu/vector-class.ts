//* https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/typescript

export class Vector {
	public state: number[] = [];
	constructor(components: number[]) {
		this.state = [...components];
	}

	public add(vector: Vector): Vector {
		this._checkErrors({ method: 'add', vector });
		return new Vector(
			this.state.map((value, index) => value + vector.state[index])
		);
	}

	public subtract(vector: Vector): Vector {
		this._checkErrors({ method: 'sub', vector });
		return new Vector(
			this.state.map((value, index) => value - vector.state[index])
		);
	}

	public dot(vector: Vector): number {
		this._checkErrors({ method: 'dot', vector });
		return this.state.reduce(
			(acc, value, index) => acc + value * vector.state[index],
			0
		);
	}

	public norm(): number {
		return Math.sqrt(
			this.state.reduce((acc, value) => acc + value ** 2, 0)
		);
	}

	public toString(): string {
		return `(${this.state.join(',')})`;
	}

	public equals(vector: Vector): boolean {
		return (
			this.state.length === vector.state.length &&
			this.state.every((value, index) => value === vector.state[index])
		);
	}

	private _checkErrors(data: {
		method: 'add' | 'sub' | 'dot';
		vector: Vector;
	}): void {
		const { method, vector } = data;
		if (this.state.length === vector.state.length) return;
		throw new Error(`Cannot ${method} vectors of different lengths`);
	}
}
