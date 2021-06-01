import { GameObject } from './Core/GameObject';
import { Point } from './Core/Point';
import { GameManager } from './Core/GameManager';
export class Bullet extends GameObject {
    constructor(Posistion, Graphic, Collider, Tag, Direction, Speed) {
        super(Posistion, Graphic, Collider);
        this.Tag = Tag;
        this.Velocity = Point.Mult(Point.Normalize(Direction), Speed);
    }
    LogicUpdate() {
        super.LogicUpdate();
        this.Position = Point.Add(this.Position, this.Velocity);
        if (this.Position.y <= 0) {
            GameManager.RemoveGameObject(this);
        }
        if (this.Position.x <= 0) {
            GameManager.RemoveGameObject(this);
        }
    }
    OnCollision(Collision) {
        if (Collision.Tag == "Player") {
            if (this.Tag == "EnemyBullet") {
            }
        }
        if (Collision.Tag == "Enemy") {
            if (this.Tag == "PlayerBullet") {
                let enemy = Collision;
                enemy.Hurt(1);
                GameManager.RemoveGameObject(this);
            }
        }
    }
}
//# sourceMappingURL=Bullet.js.map