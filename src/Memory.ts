import Instruction from "./Instruction";
import MemoryMap from "./MemoryMap";
import MemorySegment from "./MemorySegment";

class Memory {
    private Map: MemoryMap;
    private Data: number[];

    constructor(map: MemorySegment[]) {
        this.Map = new MemoryMap(map);
        this.Data = [];
        for (let i = 0; i < this.Map.Size; i++) {
            this.Data[i] = 0x00;
        }

        this.Data[0x0006] = 0x34;
        this.Data[0x0007] = 0x12;
        this.Data[0x0010] = 0x00;
        this.Data[0x0011] = 0xFF;
        this.Data[0x0042] = 0xFA;
        this.Data[0x0043] = 0xAF;
        this.Data[0xABCD] = 0xBB;
        this.Data[0x1234] = 0xCC;
        this.Data[0xFF04] = 0xEE;

        this.Data[0xFFFC] = Instruction.JSR;
        this.Data[0xFFFD] = 0x42;
        this.Data[0xFFFE] = 0x42;

        this.Data[0x4242] = Instruction.LDA_ZP;
        this.Data[0x4243] = 0x42;

        this.Data[0x4244] = Instruction.LDX_IM;
        this.Data[0x4245] = 0x01;

        this.Data[0x4246] = Instruction.LDA_ZPX;
        this.Data[0x4247] = 0x42;

        this.Data[0x4248] = Instruction.LDA_ABS;
        this.Data[0x4249] = 0xCD;
        this.Data[0x424A] = 0xAB;

        this.Data[0x424B] = Instruction.LDA_INDX;
        this.Data[0x424C] = 0x05;

        this.Data[0x424D] = Instruction.LDY_IM;
        this.Data[0x424E] = 0x04;

        this.Data[0x424F] = Instruction.LDA_INDY;
        this.Data[0x4250] = 0x10;

        this.Data[0x4251] = Instruction.HCF;
    }

    ReadByte(address: number): number {
        return this.Data[address];
    }

    ReadWord(address: number): number {
        return this.Data[address] | (this.Data[address + 1] << 8);
    }

    WriteByte(address: number, data: number) {
        this.Data[address] = data;
    }

    WriteWord(address: number, data: number) {
        this.Data[address] = data & 0xFF;
        this.Data[address + 1] = (data >> 8) & 0xFF;
    }
}

export default Memory;