import { Bullet } from "./Bullet";
import { BoxCollider } from "./Core/Collider";
import { GameManager } from "./Core/GameManager";
import { GameObject } from "./Core/GameObject";
import { Rect } from "./Core/Graphic";
import { Input } from "./Core/Input";
import { Point } from "./Core/Point";
export class Player extends GameObject {
    constructor(Posistion, Graphic, Collider) {
        super(Posistion, Graphic, Collider);
        this.ShootTimerValue = 0;
        this.ShootTimer = 10;
        this.CurrentAngle = 180;
        this.Counter = 0;
        this.Tag = "Player";
    }
    LogicUpdate() {
        super.LogicUpdate();
        if ("arrowright" in Input.KeysDown) {
            this.Position.x += 1;
        }
        if ("arrowleft" in Input.KeysDown) {
            this.Position.x -= 1;
        }
        if ("arrowup" in Input.KeysDown) {
            this.Position.y -= 1;
        }
        if ("arrowdown" in Input.KeysDown) {
            this.Position.y += 1;
        }
        if ("keyz" in Input.KeysDown) {
            if (this.ShootTimerValue <= 0) {
                let value = Math.sin(this.Counter);
                this.CurrentAngle = 270;
                GameManager.Instantiate(new Bullet(this.Position, new Rect(5, 5, "red"), new BoxCollider(5, 5, this.Position), "PlayerBullet", Point.AngleToHeading(this.CurrentAngle), 3.5));
                this.Counter += 1;
                this.ShootTimerValue = this.ShootTimer;
            }
            else {
                this.ShootTimerValue -= 1;
            }
        }
        else {
            this.ShootTimerValue = this.ShootTimer;
        }
    }
}
//# sourceMappingURL=Player.js.map