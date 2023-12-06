import MemorySegment from "./MemorySegment";

class MemoryMap {
    private Segments: MemorySegment[] = [];
    public readonly Size: number;

    constructor(map: MemorySegment[]) {
        // Calculate the size of each memory segment
        map.forEach(seg => seg.Size = seg.EndAddress - seg.StartAddress);

        // Store the memory map
        this.Segments = map;

        // Calculate the total size of the memory
        this.Size = this.Segments.reduce<number>((prev, seg) => prev + (seg.Size || 0), 0);
    }
}

export default MemoryMap;