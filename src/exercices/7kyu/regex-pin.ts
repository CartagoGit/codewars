//* https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/typescript

export class Kata {
    static validatePin(pin: string): boolean {
        return /^(\d{4}|\d{6})$/.test(pin);
    }
  }