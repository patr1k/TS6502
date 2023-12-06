import Clock from "./Clock";
import DataBus from "./DataBus";
import Memory from "./Memory";
import Register from "./Register";

class CPU6502 {
    /** A Accumulator */
    private A: Register;

    /** User Registers */
    private X: Register;
    private Y: Register;

    /** Status Register */
    private P: Register;

    /** Stack Pointer Register */
    private S: Register;

    /** Temporary Register */
    private T: Register;

    /** Program Counter (Low) */
    private PCL: Register;

    /** Program Counter (High) */
    private PCH: Register;

    /** Data Pointer (Low) */
    private DPL: Register;

    /** Data Pointer (High) */
    private DPH: Register;

    /** Direct Page Register */
    private DH: Register;

    /** Program Register */
    private PBR: Register;

    /** Data Register */
    private DBR: Register;

    /** Temporary Bank Register */
    private TBR: Register;

    /** B Accumulator */
    private B: Register;

    constructor(clk: Clock, mem: Memory) {
        this.A = Register.Init();
        this.X = Register.Init();
        this.Y = Register.Init();
        this.P = Register.Init();
        this.S = Register.Init();
        this.T = Register.Init();
        this.PCL = Register.Init();
        this.PCH = Register.Init();
        this.DPL = Register.Init();
        this.DPH = Register.Init();
        this.DH = Register.Init();
        this.PBR = Register.Init();
        this.DBR = Register.Init();
        this.TBR = Register.Init();
        this.B = Register.Init();
    }

    public Reset() {

    }

    public Run() {

    }

    private ExecuteMicrocode(ins: number) {

    }
}

export default CPU6502;