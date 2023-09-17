//* https://www.codewars.com/kata/5556282156230d0e5e000089/train/typescript

// export const DNAtoRNA = (dna: string): string => dna.replace(/T/g, "U");

// export const DNAtoRNA = (dna: string): string => dna.split("T").join("U");

export const DNAtoRNA = (dna: string): string => dna.replaceAll("T", "U");


