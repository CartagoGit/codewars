//* https://www.codewars.com/kata/570e6e32de4dc8a8340016dd/train/typescript

export class Lamp {
	public color!: string;
	public on: boolean = false;

	constructor(color: string) {
		this.color = color;
	}

	public toggleSwitch(): void {
		this.on = !this.on;
	}

	public state(): string {
		return `The lamp is ${this.on ? 'on' : 'off'}.`;
	}
}
