//* https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/typescript

export function ipToInt32(ip: string): number {
    const parts = ip.split('.').map(Number);
    const reverseParts = [...parts].reverse(); // To pow 256^0, 256^1, 256^2, 256^3 in order from ip right to left
    return reverseParts.reduce((acc, value, index) => acc + value * Math.pow(256, index), 0);
}
