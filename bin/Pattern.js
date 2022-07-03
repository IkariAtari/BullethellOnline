import { Bullet } from "./Bullet";
import { BoxCollider } from "./Core/Collider";
import { GameManager } from "./Core/GameManager";
import { Rect } from "./Core/Rect";
import { Point } from "./Core/Point";
export class Pattern {
    constructor(Bullets, Interval, PatternCode) {
        this.Bullets = Bullets;
        this.Interval = Interval;
        this.PatternCode = PatternCode;
    }
    Fire(Position) {
        for (let i = 0; i < this.Bullets.length; i++) {
            let _bulletArray = this.Bullets[i];
            let _bullet = new Bullet(Position, new Rect(5, 5, "red"), new BoxCollider(5, 5, Point.DecodePoint(_bulletArray[0])), "EnemyBullet", Point.DecodePoint(_bulletArray[1]), parseFloat(_bulletArray[2]));
            console.log("A pattern has fired!");
            GameManager.Instantiate(_bullet);
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