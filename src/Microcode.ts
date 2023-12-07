/**
 * Discrete 6502 Microinstructions
 * 
 * Based on C74-6502
 * @link https://c74project.com/
 * @link https://c74project.files.wordpress.com/2020/04/c74-6502-microinstructions.pdf
 */

import Memory from "./Memory";
import Registers from "./Registers";
import { HL } from "./Utils";

export type MicrocodeFunc = (mem: Memory, reg: Registers) => void;

const Microcode: MicrocodeFunc[] = [
    /** 0x00 */(mem, reg) => {
        mem.WriteByte(HL(reg.DPH, reg.DPL), 0x00);
    }, // *DP := 0
    /** 0x01 */(mem, reg) => {
        mem.WriteByte(HL(reg.DPH, reg.DPL), reg.A);
    }, // *DP := A
    /** 0x02 */(mem, reg) => {
        mem.WriteByte(HL(reg.DPH, reg.DPL), reg.A & reg.X);
    },   // *DP := A&X
    /** 0x03 */(mem, reg) => { },   // *DP := A&X AND DPH+1
    /** 0x04 */(mem, reg) => { },   // *DP := T
    /** 0x05 */(mem, reg) => { },   // *DP := X
    /** 0x06 */(cpu) => { },   // *DP := X AND DPH+1
    /** 0x07 */(cpu) => { },   // *DP := Y
    /** 0x08 */(cpu) => { },   // *DP := Y AND DPH+1
    /** 0x09 */(cpu) => { },   // *DPt := A
    /** 0x0A */(cpu) => { },   // *DPt := A&X
    /** 0x0B */(cpu) => { },   // *DPt := A&X AND DPH+1
    /** 0x0C */(cpu) => { },   // *DPt := DPL
    /** 0x0D */(cpu) => { },   // *SP := 0; SP -= 1
    /** 0x0E */(cpu) => { },   // *SP := A; SP -= 1
    /** 0x0F */(cpu) => { },   // *SP := B; SP -= 1
    /** 0x10 */(cpu) => { },   // *SP := DBR; SP -= 1
    /** 0x11 */(cpu) => { },   // *SP := DH; SP -= 1
    /** 0x12 */(cpu) => { },   // *SP := DPH; SP -= 1
    /** 0x13 */(cpu) => { },   // *SP := DPL; SP -= 1
    /** 0x14 */(cpu) => { },   // *SP := P; SP -= 1
    /** 0x15 */(cpu) => { },   // *SP := P; SP -= 1; PBR.CLR
    /** 0x16 */(cpu) => { },   // *SP := PBR; SP -= 1
    /** 0x17 */(cpu) => { },   // *SP := PCH; SP -= 1
    /** 0x18 */(cpu) => { },   // *SP := PCL; SP -= 1
    /** 0x19 */(cpu) => { },   // *SP := T; SP -= 1
    /** 0x1A */(cpu) => { },   // *SP := X; SP -= 1
    /** 0x1B */(cpu) => { },   // *SP := Y; SP -= 1
    /** 0x1C */(cpu) => { },   // *zDP := 0
    /** 0x1D */(cpu) => { },   // *zDP := A
    /** 0x1E */(cpu) => { },   // *zDP := A&X
    /** 0x1F */(cpu) => { },   // *zDP := T
    /** 0x20 */(cpu) => { },   // *zDP := X
    /** 0x21 */(cpu) => { },   // *zDP := Y
    /** 0x22 */(cpu) => { },   // A := 0
    /** 0x23 */(cpu) => { },   // A := A - 1; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x24 */(cpu) => { },   // A := A + 1; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x25 */(cpu) => { },   // A := A ADC B; SETF(NZCV); IR := *PC; PC += 1; END.D
    /** 0x26 */(cpu) => { },   // A := A ALR B; SETF(NZC); IR := *PC; PC += 1; END
    /** 0x27 */(cpu) => { },   // A := A AND B ROR; SETF(NZCV); IR := *PC; PC += 1; END.ARNC
    /** 0x28 */(cpu) => { },   // A := A AND B; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x29 */(cpu) => { },   // A := A AND B; SETF(NZC); IR := *PC; PC += 1; END.ARNC
    /** 0x2A */(cpu) => { },   // A := A ASL 0; SETF(NZC); IR := *PC; PC += 1; END
    /** 0x2B */(cpu) => { },   // A := A EOR B; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x2C */(cpu) => { },   // A := A LSR 0; SETF(NZC); IR := *PC; PC += 1; END
    /** 0x2D */(cpu) => { },   // A := A OR B; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x2E */(cpu) => { },   // A := A ROL 0
    /** 0x2F */(cpu) => { },   // A := A ROL 0; IR := *PC; PC += 1; END
    /** 0x30 */(cpu) => { },   // A := A ROL 0; SETF(NZC); IR := *PC; PC += 1; END
    /** 0x31 */(cpu) => { },   // A := A ROR 0; SETF(NZC); IR := *PC; PC += 1; END
    /** 0x32 */(cpu) => { },   // A := A SBC B; SETF(NZCV); IR := *PC; PC += 1; END.D
    /** 0x33 */(cpu) => { },   // A := B; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x34 */(cpu) => { },   // A := CFG
    /** 0x35 */(cpu) => { },   // A := SP; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x36 */(cpu) => { },   // A := T; IR := *PC; PC += 1; END
    /** 0x37 */(cpu) => { },   // A := X AND B; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x38 */(cpu) => { },   // A := X; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x39 */(cpu) => { },   // A := Y; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x3A */(cpu) => { },   // A AND B; SETF(NZV); BIT; IR := *PC; PC += 1; END
    /** 0x3B */(cpu) => { },   // A AND B; SETF(Z); BIT; IR := *PC; PC += 1; END
    /** 0x3C */(cpu) => { },   // A AND B; SETF(Z); IR := *PC; PC += 1; END
    /** 0x3D */(cpu) => { },   // A CMP B; SETF(NZC); IR := *PC; PC += 1; END
    /** 0x3E */(cpu) => { },   // AXS := SP AND B; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x3F */(cpu) => { },   // B := *DP
    /** 0x40 */(cpu) => { },   // B := *DP; DPL += 1
    /** 0x41 */(cpu) => { },   // B := *DP; ML
    /** 0x42 */(cpu) => { },   // B := *DP; T := !A AND B
    /** 0x43 */(cpu) => { },   // B := *DP; T := A OR B
    /** 0x44 */(cpu) => { },   // B := *DPt
    /** 0x45 */(cpu) => { },   // B := *DPt; ML
    /** 0x46 */(cpu) => { },   // B := *PC
    /** 0x47 */(cpu) => { },   // B := *SP
    /** 0x48 */(cpu) => { },   // B := *zDP
    /** 0x49 */(cpu) => { },   // B := *zDP; DPL += 1
    /** 0x4A */(cpu) => { },   // B := *zDP; ML
    /** 0x4B */(cpu) => { },   // B := *zDP; T := !A AND B
    /** 0x4C */(cpu) => { },   // B := *zDP; T := A OR B
    /** 0x4D */(cpu) => { },   // BAR := A
    /** 0x4E */(cpu) => { },   // BAR := DH; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x4F */(cpu) => { },   // CFG := T; IR := *PC; PC += 1; END
    /** 0x50 */(cpu) => { },   // DBR := B; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x51 */(cpu) => { },   // DH := *SP; SP += 1
    /** 0x52 */(cpu) => { },   // DH := BAR; SETF(NZ); IR := *PC; PC += 1; END
    /** 0x53 */(cpu) => { },   // DPH := *PC; PC += 1
    /** 0x54 */(cpu) => { },   // DPH := *zDP
    /** 0x55 */(cpu) => { },   // DPH := *zDP; DPL += 1
    /** 0x56 */(cpu) => { },   // DPH := 1
    /** 0x57 */(cpu) => { },   // DPH := B + 0; USE(IC); B := *DP
    /** 0x58 */(cpu) => { },   // DPH := B + 0; USE(IC); B := *PBA
    /** 0x59 */(cpu) => { },   // DPH := DPH + 0; USE(IC); B := *DP
    /** 0x5A */(cpu) => { },   // DPH := DPH + 0; USE(IC); B := *DPt
    /** 0x5B */(cpu) => { },   // DPH := DPH + 0; USE(IC); B := *PBA
    /** 0x5C */(cpu) => { },   // DPH := DPH + 0; USE(IC); TBR.db := *PC; PC += 1
    /** 0x5D */(cpu) => { },   // DPH := DPH + 0; USE(IC); TBR.db := *zDP
    /** 0x5E */(cpu) => { },   // DPH := PCH + B; USE(IC); B := *PC; PC += 1
    /** 0x5F */(cpu) => { },   // DPL := *DP; PC += 1
    /** 0x60 */(cpu) => { },   // DPL := 0 ASL B; SETF(NZC)
    /** 0x61 */(cpu) => { },   // DPL := 0 LSR B; SETF(NZC)
    /** 0x62 */(cpu) => { },   // DPL := 0 ROL B; SETF(NZC)
    /** 0x63 */(cpu) => { },   // DPL := 0 ROR B; SETF(NZC)
    /** 0x64 */(cpu) => { },   // DPL := B - 1; SETF(NZ)
    /** 0x65 */(cpu) => { },   // DPL := B := *PC
    /** 0x66 */(cpu) => { },   // DPL := B := *PC; PC += 1
    /** 0x67 */(cpu) => { },   // DPL := B := *PC; PC += 1; EXIT.BTF
    /** 0x68 */(cpu) => { },   // DPL := B + 1; SETF(NZ)
    /** 0x69 */(cpu) => { },   // DPL := B + SP
    /** 0x6A */(cpu) => { },   // DPL := B + X; B := *PBA
    /** 0x6B */(cpu) => { },   // DPL := B + X; B := *PC
    /** 0x6C */(cpu) => { },   // DPL := B + X; B := *PC; PC += 1
    /** 0x6D */(cpu) => { },   // DPL := B + X; B := *zDP
    /** 0x6E */(cpu) => { },   // DPL := B + X; DPH.db := *PC; PC += 1
    /** 0x6F */(cpu) => { },   // DPL := B + X; DPH.db := *PC; PC += 1; INCDPH.C
    /** 0x70 */(cpu) => { },   // DPL := B + Y; B := *PBA
    /** 0x71 */(cpu) => { },   // DPL := B + Y; B := *PC
    /** 0x72 */(cpu) => { },   // DPL := B + Y; B := *PC; PC += 1
    /** 0x73 */(cpu) => { },   // DPL := B + Y; B := *zDP
    /** 0x74 */(cpu) => { },   // DPL := B + Y; DPH.db := *DP; INCDPH.C
    /** 0x75 */(cpu) => { },   // DPL := B + Y; DPH.db := *PC; PC += 1
    /** 0x76 */(cpu) => { },   // DPL := B + Y; DPH.db := *PC; PC += 1; INCDPH.C
    /** 0x77 */(cpu) => { },   // DPL := B + Y; DPH.db := *zDP
    /** 0x78 */(cpu) => { },   // DPL := B + Y; DPH.db := *zDP; INCDPH.C
    /** 0x79 */(cpu) => { },   // DPL := PCL + B + 1; B := *PC
    /** 0x7A */(cpu) => { },   // DPL := T
    /** 0x7B */(cpu) => { },   // IR := *DP; PC += 1; END
    /** 0x7C */(cpu) => { },   // IR := *PC; PC += 1; END
    /** 0x7D */(cpu) => { },   // IR := *PC; PC += 1; END.INT
    /** 0x7E */(cpu) => { },   // NOP
    /** 0x7F */(cpu) => { },   // P := *SP
    /** 0x80 */(cpu) => { },   // P := *SP; SP += 1
    /** 0x81 */(cpu) => { },   // P := P AND !B; IR := *PC; PC += 1; END
    /** 0x82 */(cpu) => { },   // P := P OR B; IR := *PC; PC += 1; END
    /** 0x83 */(cpu) => { },   // PBR := *PC; PC += 1
    /** 0x84 */(cpu) => { },   // PBR := *SP
    /** 0x85 */(cpu) => { },   // PBR := 0
    /** 0x86 */(cpu) => { },   // PC -= 1
    /** 0x87 */(cpu) => { },   // PCH := *DP
    /** 0x88 */(cpu) => { },   // PCH := *fDP; SETF(SEI/CLD)
    /** 0x89 */(cpu) => { },   // PCH := *SP
    /** 0x8A */(cpu) => { },   // PCH := *SP; SP += 1
    /** 0x8B */(cpu) => { },   // PCH := B + 0; USE(IC)
    /** 0x8C */(cpu) => { },   // PCH := PCH + signextend(*); USE(IC)
    /** 0x8D */(cpu) => { },   // PCL := *DP
    /** 0x8E */(cpu) => { },   // PCL := *DP; DPL += 1
    /** 0x8F */(cpu) => { },   // PCL := *fCP; DPL += 1
    /** 0x90 */(cpu) => { },   // PCL := *SP; SP += 1
    /** 0x91 */(cpu) => { },   // PCL := B + X; B := *PC
    /** 0x92 */(cpu) => { },   // PCL := PCL + B; EXIT.CC
    /** 0x93 */(cpu) => { },   // SETF(OPCODE 0); IR := *PC; PC += 1; END
    /** 0x94 */(cpu) => { },   // SETF(OPCODE 1); IR := *PC; PC += 1; END
    /** 0x95 */(cpu) => { },   // SP := A&X; IR := *PC; PC += 1; END
    /** 0x96 */(cpu) => { },   // SP := A; IR := *PC; PC += 1; END
    /** 0x97 */(cpu) => { },   // SP := X; IR := *PC; PC += 1; END
    /** 0x98 */(cpu) => { },   // SP += 1; B := *SP
    /** 0x99 */(cpu) => { },   // SPI (ALU PASS B)
    /** 0x9A */(cpu) => { },   // STP; IR := *PC; PC += 1; END
    /** 0x9B */(cpu) => { },   // T := !B; B := *PC; PC += 1; END
    /** 0x9C */(cpu) => { },   // T := !BCG OR B
    /** 0x9D */(cpu) => { },   // T := *zDP; DPL += 1
    /** 0x9E */(cpu) => { },   // T := 0 ASL B; SETF(NZC)
    /** 0x9F */(cpu) => { },   // T := 0 LSR B; SETF(NZC)
    /** 0xA0 */(cpu) => { },   // T := 0 ROL B; SETF(NZC)
    /** 0xA1 */(cpu) => { },   // T := 0 ROR B; SETF(NZC)
    /** 0xA2 */(cpu) => { },   // T := A
    /** 0xA3 */(cpu) => { },   // T := B - 1; SETF(NZ)
    /** 0xA4 */(cpu) => { },   // T := B + 1; SETF(NZ)
    /** 0xA5 */(cpu) => { },   // T := B + Y; DPH.db := *DP
    /** 0xA6 */(cpu) => { },   // T := B + Y; DPH.db := *zDP
    /** 0xA7 */(cpu) => { },   // T := B + Y; DPH.db := *zDP; DPL += 1
    /** 0xA8 */(cpu) => { },   // T := B; B := *PC; PC += 1; EXIT.BTF
    /** 0xA9 */(cpu) => { },   // T := BAR
    /** 0xAA */(cpu) => { },   // T := BCG AND B
    /** 0xAB */(cpu) => { },   // TBR := *PC; PC += 1
    /** 0xAC */(cpu) => { },   // TBR := *zDP
    /** 0xAD */(cpu) => { },   // TBR := DBR + 0; USE(IC)
    /** 0xAE */(cpu) => { },   // TBR := TBR + 0; USE(IC)
    /** 0xAF */(cpu) => { },   // WAI; IR := *PC; PC += 1; END
    /** 0xB0 */(cpu) => { },   // X := *DP
    /** 0xB1 */(cpu) => { },   // X := *DPt
    /** 0xB2 */(cpu) => { },   // X := *PC; PC += 1
    /** 0xB3 */(cpu) => { },   // X := *zDP
    /** 0xB4 */(cpu) => { },   // X := A&X SBC1 B; SETF(NZC); IR := *PC; PC += 1; END
    /** 0xB5 */(cpu) => { },   // X := A; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xB6 */(cpu) => { },   // X := B
    /** 0xB7 */(cpu) => { },   // X := B; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xB8 */(cpu) => { },   // X := SP; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xB9 */(cpu) => { },   // X := X - 1; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xBA */(cpu) => { },   // X := X + 1; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xBB */(cpu) => { },   // X := Y; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xBC */(cpu) => { },   // X CMP B; SETF(NZC); IR := *PC; PC += 1; END
    /** 0xBD */(cpu) => { },   // Y := A; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xBE */(cpu) => { },   // Y := B; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xBF */(cpu) => { },   // Y := X; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xC0 */(cpu) => { },   // Y := Y - 1; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xC1 */(cpu) => { },   // Y := Y + 1; SETF(NZ); IR := *PC; PC += 1; END
    /** 0xC2 */(cpu) => { },   // Y CMP B; SETF(NZC); IR := *PC; PC += 1; END
];

export default Microcode;