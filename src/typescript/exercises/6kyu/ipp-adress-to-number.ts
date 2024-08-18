//* https://www.codewars.com/kata/541a354c39c5efa5fa001372/train/typescript

export function ipToNum(ip: string): number {
	const octets = ip.split('.');
	const binaryOctets = octets.map((octet) =>
		parseInt(octet, 10).toString(2).padStart(8, '0')
	);
    const binaryOctetsString = binaryOctets.join('');
    const result = parseInt(binaryOctetsString, 2);
	return result;
}

export function numToIp(x: number): string {
	return '0.0.0.0';
}

console.log(ipToNum('192.168.1.1'), ' ---> ' + 3232235777);
console.log(ipToNum('10.0.0.0'), ' ---> ' + 167772160);
console.log(ipToNum('176.16.0.1'), ' ---> ' + 2953838593);

// console.log(numToIp(3232235777), ' ---> ' +'192.168.1.1');
// console.log(numToIp(167772160), ' ---> ' +'10.0.0.0');
// console.log(numToIp(2953838593), ' ---> ' +'176.16.0.1');

// console.log(numToIp(ipToNum('192.168.1.1')), ' ---> ' +'192.168.1.1');
// console.log(numToIp(ipToNum('10.0.0.0')), ' ---> ' +'10.0.0.0');
// console.log(numToIp(ipToNum('176.16.0.1')), ' ---> ' +'176.16.0.1');
// console.log(ipToNum(numToIp(3232235777)), ' ---> ' +3232235777);
// console.log(ipToNum(numToIp(167772160)), ' ---> ' +167772160);
// console.log(ipToNum(numToIp(2953838593)), ' ---> ' +2953838593);
