//* https://www.codewars.com/kata/55b1fd84a24ad00b32000075/train/typescript

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
type IDay = typeof days[number];

export function amIAfraid(day: string, num: number): boolean {
	const numIllness: Record<IDay, boolean> = {
        Monday: num === 12,
        Tuesday: num > 95,
        Wednesday: num === 34,
        Thursday: num === 0,
        Friday: num % 2 === 0,
        Saturday: num === 56,
        Sunday: Math.abs(num) === 666 
    }
    return numIllness[day as IDay] ?? false;
}
