class Bullet extends GameObject {
    constructor(Posistion, Graphic, Collider, Tag, Direction, Speed) {
        super(Posistion, Graphic, Collider);
        this.Tag = Tag;
        this.Velocity = Point.Mult(Point.Normalize(Direction), Speed);
    }
    LogicUpdate() {
        super.LogicUpdate();
        // TODO: move by heading, and path
        //this.Velocity = Point.Mult(Point.Normalize(Direction), Speed);
        this.Position = Point.Add(this.Position, this.Velocity);
        if (this.Position.y <= 0) {
            Game.RemoveGameObject(this);
        }
        if (this.Position.x <= 0) {
            Game.RemoveGameObject(this);
        }
    }
    OnCollision(Collision) {
        if (Collision.Tag == "Player") {
            if (this.Tag == "EnemyBullet") {
                // Hurt player
            }
        }
        if (Collision.Tag == "Enemy") {
            if (this.Tag == "PlayerBullet") {
                let enemy = Collision;
                enemy.Hurt(1);
                Game.RemoveGameObject(this);
            }
        }
    }
}
//# sourceMappingURL=Bullet.js.map