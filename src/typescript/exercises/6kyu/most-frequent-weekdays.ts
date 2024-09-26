//* https://www.codewars.com/kata/56eb16655250549e4b0013f4/train/typescript

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const mostFrequentDays = (year: number): string[] => {
  const mapDays = new Map<string, number>();
  for(let month = 1; month <= 12; month++) {
    const daysInMonth = new Date(year, month , 0).getDate();
    for(let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = new Date(year, month - 1, day - 1).getDay();
      const dayName = days[dayOfWeek];
      mapDays.set(dayName, (mapDays.get(dayName) ?? 0) + 1);
    }
  }
    const max = Math.max(...mapDays.values());
    return days.filter(day => mapDays.get(day) === max);
};

