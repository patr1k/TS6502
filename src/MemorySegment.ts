import MemoryType from "./MemoryType";

interface MemorySegment {
    StartAddress: number;
    EndAddress: number;
    Size?: number;
    Type: MemoryType;
}

export default MemorySegment;