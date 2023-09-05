//* https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/typescript

//* Decorator for check length in both vectors
const CheckLength = (
	_: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) => {
	const originalMethod = descriptor.value as Function;
	descriptor.value = function (vector: Vector) {
		const thisObject = this as Vector;
		if (thisObject.length !== vector.length)
			throw new Error(
				`Cannot ${propertyKey} vectors of different lengths`
			);
		return originalMethod.apply(this, [vector]);
	};
};

//* Vector class
export class Vector {
	public state: readonly number[] = [];

	get length() {
		return this.state.length;
	}

	constructor(components: number[]) {
		this.state = [...components];
	}

	@CheckLength
	public add(vector: Vector): Vector {
		return new Vector(
			this.state.map((value, index) => value + vector.state[index])
		);
	}

	@CheckLength
	public subtract(vector: Vector): Vector {
		return new Vector(
			this.state.map((value, index) => value - vector.state[index])
		);
	}

	@CheckLength
	public dot(vector: Vector): number {
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
}
