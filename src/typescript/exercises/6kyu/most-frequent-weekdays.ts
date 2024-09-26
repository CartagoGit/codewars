//* https://www.codewars.com/kata/56eb16655250549e4b0013f4/train/typescript

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', "November", "December"];

export const mostFrequentDays = (year: number): string[] => {
  const mapDays = new Map<string, number>();
  for(let month = 1; month <= 12; month++) {
    const daysInMonth = new Date(year, month - 1 , 0).getDate();
    console.log(months[month - 1],daysInMonth);
    for(let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);
      const dayOfWeek = date.getDay();
      const dayName = days[dayOfWeek];
      mapDays.set(dayName, (mapDays.get(dayName) ?? 0) + 1);
    }
  }
    const max = Math.max(...mapDays.values());
    return days.filter(day => mapDays.get(day) === max);
};


console.log(mostFrequentDays(1770)); // ["Monday"]