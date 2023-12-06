const Instructions = [
    /** 0x00 */[0x17, 0x18, 0x15, 0x8F, 0x88, 0x7D, 0x66],          // brk
    /** 0x01 */[0x6D, 0x9D, 0x54, 0x44, 0x2D, 0x66],                // ora x, ind
    /** 0x02 */[0x9A, 0x66],                                        // kil imp
    /** 0x03 */[0x6D, 0x9D, 0x54, 0x45, 0x60, 0x0C, 0x2D, 0x66],    // slo x, ind
    /** 0x04 */[0x48, 0x7C, 0x66],                                  // ldd zpg
    /** 0x05 */[0x48, 0x2D, 0x66],                                  // ora zpg
    /** 0x06 */[0x4A, 0x9E, 0x1F, 0x7C, 0x66],                      // asl zpg
    /** 0x07 */[0x4A, 0x9E, 0x1F, 0x2D, 0x66],                      // slo zpg
    /** 0x08 */[0x14, 0x7C, 0x66],                                  // php imp
    /** 0x09 */[0x2D, 0x66],                                        // ora abs
    /** 0x0A */[0x2A, 0x66],                                        // asl a
];

export default Instructions;