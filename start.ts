import CPU from "./src/CPU6502";
import Clock from "./src/Clock";
import Memory from "./src/Memory";
import MemoryType from "./src/MemoryType";

const clk = new Clock(1);

const mem = new Memory([{
    StartAddress: 0x0000,
    EndAddress: 0x3FFF,
    Type: MemoryType.RAM
}, {
    StartAddress: 0x4000,
    EndAddress: 0x5FFF,
    Type: MemoryType.Unused
}, {
    StartAddress: 0x6000,
    EndAddress: 0x7FFF,
    Type: MemoryType.IO
}, {
    StartAddress: 0x8000,
    EndAddress: 0xFFFF,
    Type: MemoryType.ROM
}]);

const cpu = new CPU(clk, mem);

cpu.Reset();
cpu.Run();
