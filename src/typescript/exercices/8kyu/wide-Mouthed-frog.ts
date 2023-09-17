//* https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/typescript

export function mouthSize(animal: string): string {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
  }