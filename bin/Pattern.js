import { GameManager } from "./Core/GameManager";
export class Pattern {
    constructor(Bullets, Interval, PatternCode) {
        this.Bullets = Bullets;
        this.Interval = Interval;
        this.PatternCode = PatternCode;
    }
    Fire(Position) {
        for (let i = 0; i < this.Bullets.length; i++) {
            this.Bullets[i].Position = Position;
            GameManager.Instantiate(this.Bullets[i]);
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