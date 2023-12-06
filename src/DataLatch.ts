class DataLatch {
    public readonly LatchSize: number;
    private InBits: boolean[];
    private OutBits: boolean[];
    private Latched: boolean;

    constructor(size: number) {
        this.LatchSize = size;
        this.InBits = [];
        this.OutBits = [];
        for (let i = 0; i < size; i++) {
            this.InBits[i] = false;
            this.OutBits[i] = false;
        }
    }

    public latch(latched: boolean): void {
        this.Latched = latched;
        if (!latched) {
            this.OutBits = this.InBits;
        }
    }

    public setBit(bit: number, state: boolean): void {
        if (bit < this.LatchSize) {
            this.InBits[bit] = state;
            if (!this.Latched) {
                this.OutBits[bit] = state;
            }
        }
    }

    public getBit(bit: number): boolean {
        if (bit < this.LatchSize) {
            return this.OutBits[bit];
        }
        return false;
    }

    public setByte(data: number): void {
        if (this.LatchSize === 8) {
            const mask = 0b10000000;
            for (let i = 0; i < 8; i++) {
                this.InBits[i] = !!(data & (mask >> i));
            }
            if (!this.Latched) {
                this.OutBits = this.InBits;
            }
        }
    }

    public getByte(): number {
        if (this.LatchSize === 8) {
            let data = 0;
            const mask = 0b10000000;
            for (let i = 0; i < 8; i++) {
                data |= this.OutBits[i] ? mask >> i : 0;
            }
            return data;
        }
        return 0;
    }

    public setWord(data: number): void {
        if (this.LatchSize === 16) {
            const mask = 0b10000000;
            for (let i = 0; i < 16; i++) {
                this.InBits[i] = !!(data & (mask >> i));
            }
            if (!this.Latched) {
                this.OutBits = this.InBits;
            }
        }
    }

    public getWord(): number {
        if (this.LatchSize >= 16) {
            let data = 0;
            const mask = 0b1000000000000000;
            for (let i = 0; i < 16; i++) {
                data |= this.OutBits[i] ? mask >> i : 0;
            }
            return data;
        }
        return 0;
    }
}

export default DataLatch;