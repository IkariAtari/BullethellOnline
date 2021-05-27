class Pattern {
    constructor(Bullets, Interval) {
        this.Bullets = Bullets;
        this.Interval = Interval;
    }
    Fire(Position) {
        for (let i = 0; i < this.Bullets.length; i++) {
            this.Bullets[i].Position = Position;
            Game.Instantiate(this.Bullets[i]);
        }
    }
    PatternStep() {
    }
    StartPattern(Position) {
        this.interval = setInterval(() => this.PatternStep(), 10);
    }
    StopPattern() {
        clearInterval(this.interval);
    }
}
//# sourceMappingURL=Pattern.js.map