class Bullet extends GameObject 
{
    public Velocity: Point;

    constructor(Posistion: Point, Graphic: Graphic, Collider: BoxCollider, Tag: string, Direction: Point, Speed: number) 
    {
        super(Posistion, Graphic, Collider);

        this.Tag = Tag;
        this.Velocity = Point.Mult(Point.Normalize(Direction), Speed);
    }

    public LogicUpdate(): void 
    {
        super.LogicUpdate();
        
        // TODO: move by heading, and path
        //this.Velocity = Point.Mult(Point.Normalize(Direction), Speed);
        
        this.Position = Point.Add(this.Position, this.Velocity);

        if (this.Position.y <= 0) 
        {
            Game.RemoveGameObject(this);
        }
        if (this.Position.x <= 0) 
        {
            Game.RemoveGameObject(this);
        }
    }

    public OnCollision(Collision: GameObject) 
    {
        if (Collision.Tag == "Player") 
        {
            if (this.Tag == "EnemyBullet") 
            {
                // Hurt player
            }
        }
        if (Collision.Tag == "Enemy") 
        {
            if (this.Tag == "PlayerBullet") 
            {
                let enemy = Collision as Enemy;

                enemy.Hurt(1);

                Game.RemoveGameObject(this);
            }
        }
    }
}