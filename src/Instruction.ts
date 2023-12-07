enum Instruction {
    NOP = 0x00, // should really be BRK

    HCF = 0x99,
    JSR = 0x20,

    ADC_IM = 0x69,
    ADC_ZP = 0x65,
    ADC_ZPX = 0x75,
    ADC_ABS = 0x6D,
    ADC_ABSX = 0x7D,
    ADC_ABSY = 0x79,
    ADC_INDX = 0x61,
    ADC_INDY = 0x71,

    AND_IM = 0x29,
    AND_ZP = 0x25,
    AND_ZPX = 0x35,
    AND_ABS = 0x2D,
    AND_ABSX = 0x3D,
    AND_ABSY = 0x39,
    AND_INDX = 0x21,
    AND_INDY = 0x31,

    ASL_A = 0x0A,
    ASL_ZP = 0x06,
    ASL_ZPX = 0x16,
    ASL_ABS = 0x0E,
    ASL_ABSX = 0x1E,

    BCC = 0x90,

    BCS = 0xB0,

    BEQ = 0xF0,

    BIT_ZP = 0x24,
    BIT_ABS = 0x2C,

    BMI = 0x30,

    BNE = 0xD0,

    BPL = 0x10,

    BVC = 0x50,

    BVS = 0x70,

    CLC = 0x18,

    CLD = 0xD8,

    CLI = 0x58,

    CLV = 0xB8,

    LDA_IM = 0xA9,
    LDA_ZP = 0xA5,
    LDA_ZPX = 0xB5,
    LDA_ABS = 0xAD,
    LDA_ABSX = 0xBD,
    LDA_ABSY = 0xB9,
    LDA_INDX = 0xA1,
    LDA_INDY = 0xB1,

    LDX_IM = 0xA2,

    LDY_IM = 0xA0,

    STA_ZP = 0x84,
    STA_ZPX = 0x94,
    STA_ABS = 0x8D,
    STA_ABSX = 0x9D,
    STA_ABSY = 0x99,
    STA_INDX = 0x81,
    STA_INDY = 0x91,
}

export default Instruction;