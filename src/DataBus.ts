class DataBus {
    public readonly BusSize: number;
    private Bits: boolean[];

    constructor(size: number) {
        this.BusSize = size;
        this.Bits = [];
        for (let i = 0; i < size; i++) {
            this.Bits[i] = false;
        }
    }

    public setBit(bit: number, state: boolean): void {
        if (bit < this.BusSize) {
            this.Bits[bit] = state;
        }
    }

    public getBit(bit: number): boolean {
        if (bit < this.BusSize) {
            return this.Bits[bit];
        }
        return false;
    }

    public getByte(): number {
        if (this.BusSize === 8) {
            let data = 0;
            const mask = 0b10000000;
            for (let i = 0; i < 8; i++) {
                data |= this.Bits[i] ? mask >> i : 0;
            }
            return data;
        }
        return 0;
    }

    public getWord(): number {
        if (this.BusSize === 16) {
            let data = 0;
            const mask = 0b1000000000000000;
            for (let i = 0; i < 16; i++) {
                data |= this.Bits[i] ? mask >> i : 0;
            }
            return data;
        }
        return 0;
    }
}

export default DataBus;