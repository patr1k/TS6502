import { Byte } from "./Utils";

interface Registers {
    A: Byte;
    X: Byte;
    Y: Byte;
    IR: Byte;
    PCH: Byte;
    PCL: Byte;
    DPH: Byte;
    DPL: Byte;
    ADH: Byte;
    ADL: Byte;
    T: Byte;
    S: Byte;
    P: Byte;

    PBR: Byte;
    DBR: Byte;
    TBR: Byte;
}

export default Registers;