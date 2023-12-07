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

        this.Data[0x0000] = Instruction.LDA_IM;
        this.Data[0x0001] = 0x90;
        this.Data[0x0002] = Instruction.AND_IM;
        this.Data[0x0003] = 0xFF;
        this.Data[0x0004] = Instruction.ASL_A;
        this.Data[0x0005] = Instruction.BCS;
        this.Data[0x0006] = 0x50;
        this.Data[0x0007] = 0x00;

        this.Data[0x0050] = Instruction.STA_ABS;
        this.Data[0x0051] = 0xCD;
        this.Data[0x0052] = 0xAB;

        this.Data[0xFFFC] = 0x00;
        this.Data[0xFFFD] = 0x00;
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