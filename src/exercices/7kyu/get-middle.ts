//* https://www.codewars.com/kata/56747fd5cb988479af000028/train/typescript

export const getMiddle = (text: string) => {
    const middleIndex = Math.floor(text.length / 2);
    return text.length % 2 === 0
        ? text.slice(middleIndex - 1, middleIndex + 1)
        : text.slice(middleIndex, middleIndex + 1);
} 