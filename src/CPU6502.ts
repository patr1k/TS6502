import Clock from "./Clock";
import InstructionCode from "./InstructionCode";
import Memory from "./Memory";
import Microcode from "./Microcode";
import Registers from "./Registers";
import { H, L, Word } from "./Utils";

class CPU6502 {
    public Mem: Memory;
    public Clk: Clock;

    /** Registers */
    private Reg: Registers;

    /** Microcode Registers */
    // Note: These registers don't exist as such on the actual CPU. They are used
    // here to manage the execution of microcode cycles during each instruction
    private ucIns: number; // Instruction
    private ucLen: number; // Microcode Length
    private ucIdx: number; // Microcode Index (Micro-Program Counter)

    constructor(clk: Clock, mem: Memory) {
        this.Clk = clk;
        this.Mem = mem;
    }

    public Reset() {
        this.Reg.A = 0x00;
        this.Reg.X = 0x00;
        this.Reg.Y = 0x00;
        this.Reg.P = 0x00;
        this.Reg.S = 0x00;
        this.Reg.T = 0x00;
        this.Reg.PCL = 0xFF;
        this.Reg.PCH = 0xFC;
        this.Reg.DPL = 0x00;
        this.Reg.DPH = 0x00;
        this.Reg.PBR = 0x00;
        this.Reg.DBR = 0x00;
        this.Reg.TBR = 0x00;
    }

    public Run() {
        const initVec = this.Mem.ReadWord(0xFFFC);
        this.Reg.PCH = H(initVec);
        this.Reg.PCL = L(initVec);
    }

    public Tick() {
        if (this.ucIdx === this.ucLen) {
            this.ucIns = this.Reg.IR;
            this.ucLen = InstructionCode[this.ucIns].length;
            this.ucIdx = 0;
        }

        this.Execute();
    }

    private Execute() {
        const idx = InstructionCode[this.ucIns][this.ucIdx];
        const uc = Microcode[idx];
        uc(this.Mem, this.Reg);
        this.ucIdx++;
    }
}

export default CPU6502;