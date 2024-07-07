//* https://www.codewars.com/kata/547274e24481cfc469000416/train/typescript

export class God{
    /**
     * @returns Human[]
     */
      static create(): Human[]{
        return [new Man(), new Woman()]
      }
    }
export class Human {}
export class Man extends Human{}
export class Woman extends Human{}