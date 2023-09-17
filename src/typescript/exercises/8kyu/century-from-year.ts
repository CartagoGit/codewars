export const initCenturyFromYear = () => centuryFromYear(0);

export const centuryFromYear = (year: number): number => Math.ceil(year / 100);
