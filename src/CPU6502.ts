import Clock from "./Clock";
import DataBus from "./DataBus";
import Memory from "./Memory";
import Register from "./Register";

class CPU6502 {
    /** A Accumulator */
    private A: number;

    /** User Registers */
    private X: number;
    private Y: number;

    /** Status Register */
    private P: number;

    /** Stack Pointer Register */
    private S: number;

    /** Temporary Register */
    private T: number;

    /** Program Counter (Low) */
    private PCL: number;

    /** Program Counter (High) */
    private PCH: number;

    /** Data Pointer (Low) */
    private DPL: number;

    /** Data Pointer (High) */
    private DPH: number;

    /** Direct Page Register */
    private DH: number;

    /** Program Register */
    private PBR: number;

    /** Data Register */
    private DBR: number;

    /** Temporary Bank Register */
    private TBR: number;

    /** B Accumulator */
    private B: number;

    constructor(clk: Clock, mem: Memory) {

    }

    public Reset() {
        this.A = 0x00;
        this.X = 0x00;
        this.Y = 0x00;
        this.P = 0x00;
        this.S = 0x00;
        this.T = 0x00;
        this.PCL = 0xFF;
        this.PCH = 0xFC;
        this.DPL = 0x00;
        this.DPH = 0x00;
        this.DH = 0x00;
        this.PBR = 0x00;
        this.DBR = 0x00;
        this.TBR = 0x00;
        this.B = 0x00;
    }

    public Run() {

    }

    private ExecuteMicrocode(ins: number) {

    }
}

export default CPU6502;