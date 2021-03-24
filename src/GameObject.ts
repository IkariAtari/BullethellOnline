class GameObject 
{
    public Tag: string;

    public ID: number;

    public static Count: number;

    public Position: Point;

    public Graphic: Graphic;

    public Collider: BoxCollider;

    constructor(Position: Point, Graphic: Graphic, Collider: BoxCollider, Tag: string = "none") 
    {
        this.Position = Position;
        this.Graphic = Graphic;
        this.Collider = Collider;
        this.Tag = Tag;

        if (GameObject.Count == null) 
        {
            GameObject.Count = 0;
        }
        else 
        {
            GameObject.Count += 1;
        }

        this.ID = GameObject.Count;

        //console.log(this.ID + " " + GameObject.Count);
    }

    public Start(): void 
    {

    }

    public LogicUpdate(): void 
    {
        this.Graphic.Position = this.Position;
        this.Collider.Posistion = this.Position;

        for (let i = 0; i < Game.GameObjects.length; i++) 
        {
            if (Game.GameObjects[i] != this) 
            {
                GameObject.CheckCollision(this, Game.GameObjects[i]);
            }
        }
    }

    public Draw(): void 
    {
        this.Graphic.Draw();
    }

    public static CheckCollision(a: GameObject, b: GameObject) 
    {
        if (a.Collider.CheckCollision(b.Collider)) 
        {
            b.OnCollision(a);
        }
    }

    public OnCollision(Collision: GameObject): void 
    {

    }
}

class Player extends GameObject 
{
    private ShootTimerValue: number = 0;
    public ShootTimer: number = 10;
    private CurrentAngle: number = 180;
    private Counter: number = 0;

    constructor(Posistion: Point, Graphic: Graphic, Collider: BoxCollider) 
    {
        super(Posistion, Graphic, Collider);
        this.Tag = "Player";
    }

    public LogicUpdate(): void 
    {
        super.LogicUpdate();

        if ("arrowright" in Input.KeysDown) 
        {
            this.Position.x += 1;
        }
        if ("arrowleft" in Input.KeysDown) 
        {
            this.Position.x -= 1;
        }
        if ("arrowup" in Input.KeysDown) 
        {
            this.Position.y -= 1;
        }
        if ("arrowdown" in Input.KeysDown) 
        {
            this.Position.y += 1;
        }
        if (" " in Input.KeysDown) 
        {
            if (this.ShootTimerValue <= 0) 
            {   
                let value = Math.sin(this.Counter);
                //console.log(value * 180);
                this.CurrentAngle = 270 + value * 10;
                //for(let i = 0; i < 4; i++)
                //{
                    Game.Instantiate(new Bullet(this.Position, new Rect(5, 5, "red"), new BoxCollider(5, 5, this.Position), "PlayerBullet", Point.AngleToHeading(this.CurrentAngle), 3.5));
                //}

                
                
                this.Counter += 1;
                //console.log("Current Angle: "+this.CurrentAngle);
                this.ShootTimerValue = this.ShootTimer;
            }
            else 
            {
                this.ShootTimerValue -= 1;
            }
        }
        else 
        {
            this.ShootTimerValue = this.ShootTimer;
        }
    }
}

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

class Enemy extends GameObject 
{
    public Health: number;

    public Path: EnemyPath;

    public Speed: number;
    public Target: Point;

    public isOnHold: boolean = false;

    public Tick: number;
    public Iteration: number;

    constructor(Position: number, Graphic: Graphic, Collider: BoxCollider, Health: number, Path: EnemyPath, Speed: number) 
    {
        super(new Point(Position, -10), Graphic, Collider);

        this.Health = Health;
        this.Path = Path;
        this.Speed = Speed;

        this.Tick = 0;
        this.Iteration = 0;

        this.Tag = "Enemy";
    }

    public LogicUpdate(): void 
    {
        super.LogicUpdate();

        if (this.Health <= 0) 
        {
            Game.RemoveGameObject(this);
        }

        if (this.Tick < this.Path.Actions.length) 
        {
            if (this.Iteration == this.Path.Actions[this.Tick][1]) 
            {
                switch (this.Path.Actions[this.Tick][0]) 
                {
                    case "move":
                        this.Target = this.Path.Actions[this.Tick][2];

                        //console.log(Point.Normalize(Point.Direction(this.Position, this.Target)));
                        break;

                    case "speed":

                        break;
                    case "shoot" :
                            let pattern = this.Path.Actions[this.Tick][2];
                            pattern.Fire(this.Position);
                        break;

                    case "StartInterval" :

                        break;
                    
                    case "StopInterval" :

                        break

                    default:
                        console.log("No valid action assigned");
                        break;
                }

                this.Tick += 1;
            }
        }

        this.Iteration += 1;
        let dir = Point.Direction(this.Position, this.Target) as Point;
        this.Position = Point.Add(this.Position, Point.Normalize(new Point(dir.x * this.Speed, dir.y * this.Speed)));
    }


    public Hurt(Damage: number) 
    {
        this.Health -= Damage;
    }
}

class EnemyPath 
{
    public Actions: any[][];

    constructor(Actions: any[][]) 
    {
        this.Actions = Actions;
    }
}