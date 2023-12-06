type ClockListener = () => void;

class Clock {
    private Interval: number;
    private Timer: NodeJS.Timeout;
    private Listeners: ClockListener[] = [];

    constructor(hertz: number = 100) {
        this.Interval = Math.round(1000 / hertz);
    }

    AddListener(listener: ClockListener) {
        this.Listeners.push(listener);
    }

    Run() {
        this.Timer = setInterval(() => this.Step(), this.Interval);
    }

    Stop() {
        clearInterval(this.Timer);
    }

    Step() {
        this.Listeners.forEach(cl => cl());
    }
}

export default Clock;