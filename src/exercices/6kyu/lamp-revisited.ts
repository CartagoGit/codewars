//* https://www.codewars.com/kata/570e6e32de4dc8a8340016dd/train/typescript

export class Lamp {
	public on: boolean = false;
	constructor(public color: string) {}
	public toggleSwitch = (): boolean => (this.on = !this.on);
	public state = (): string => `The lamp is ${this.on ? 'on' : 'off'}.`;
}
