//* https://www.codewars.com/kata/55c0ac142326fdf18d0000af/train/typescript

export class Cube {
  
    private _side: number;
  
    public getSide(): number {
      return this._side;
    }
  
    public setSide(value: number) {
      this._side = Math.abs(value);
    }
  }