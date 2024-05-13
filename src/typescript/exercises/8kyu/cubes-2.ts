//* https://www.codewars.com/kata/55c0ac142326fdf18d0000af/train/typescript

export class Cube {
  
    private _side: number;

    constructor (side?: number) {
        this._side = Math.abs(side || 0);
    }
  
    public getSide(): number {
      return this._side;
    }
  
    public setSide(value: number) {
      this._side = Math.abs(value);
    }
  }