export enum Endianness {
    BIG,
    LITTLE
};

export type Byte = number;
export type Word = Byte;

export const H = (word: Word): Byte => word >> 8;
export const L = (word: Word): Byte => word & 0xF;
export const HL = (high: Byte, low: Byte): Word => (high << 8) | low;