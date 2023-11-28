//* https://www.codewars.com/kata/5977618080ef220766000022/train/typescript

export function usdcny(usd: number): string {
    const conversionRate = 6.75;    
	return `${(usd * conversionRate).toFixed(2)} Chinese Yuan`;
}
