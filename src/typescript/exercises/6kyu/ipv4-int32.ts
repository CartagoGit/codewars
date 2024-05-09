//* https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/typescript

export function ipToInt32(ip: string): number {
	const parts = ip.split('.');
    let num = 0;
    for (let i = 0; i < parts.length; i++) {
        num += parseInt(parts[i], 10) * Math.pow(256, parts.length - 1 - i);
    }
    return num;
}
