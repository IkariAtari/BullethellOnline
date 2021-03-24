class Level 
{
    public Patterns: Pattern[] =
    [
        new Pattern(
            new Array(
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(-5, 0.2), 0.2),
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(-2.5, 0.2), 0.2),
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(0, 0.2), 0.2),
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(2.5, 0.2), 0.2),
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(5, 0.2), 0.2)
            ),
            0
        )
    ];

    public Level: LevelTick[] = 
    [
       new LevelTick(
            0, 
            new SpawnAction(
                new Player(
                    new Point(40, 40), 
                    new Rect(10, 10, "green"), 
                    new BoxCollider(10, 10, new Point(40, 40))
                )
            )
        ),
        new LevelTick(
            500, 
            new SpawnAction(
                new Enemy(
                    100, 
                    new Rect(10, 10, "purple"), 
                    new BoxCollider(10, 10, new Point(40, 10)),
                    10,
                    new EnemyPath([
                        ["move", 10, new Point(150, 200)],
                        ["move", 50, new Point(400, 100)],
                        ["shoot", 55, this.Patterns[0]],
                        ["shoot", 60, this.Patterns[0]],
                        ["shoot", 70, this.Patterns[0]],
                        ["shoot", 80, this.Patterns[0]],
                        ["shoot", 90, this.Patterns[0]]
                    ]),
                    0.1
                )
            )
        ),
    ];

    public Tick: number;
    private Iteration: number;

    constructor()
    {
        this.Tick = 0;
        this.Iteration = 0;
    }

    public LogicUpdate() 
    {
        if(this.Tick < this.Level.length)
        {
            if(this.Iteration == this.Level[this.Tick].AtTime)
            {
                this.Level[this.Tick].Action.Action();
                
                this.Tick++;
            }
        }

        this.Iteration += 1;

        Context.clearRect(0, 0, 500, 500);

        for (let i = 0; i < Game.GameObjects.length; i++)
        {
            Game.GameObjects[i].LogicUpdate();
        }

        this.DrawUpdate();
    }

    public DrawUpdate() 
    {
        for (let i = 0; i < Game.GameObjects.length; i++) 
        {
            Game.GameObjects[i].Draw();
        }
    }
}

class LevelTick
{
    public AtTime: number;
    
    // Needs to be array of level actions
    public Action: LevelAction;

    constructor(AtTime: number, Action: LevelAction)
    {
        this.AtTime = AtTime;
        this.Action = Action;

        console.log("Initated level action at: " + this.AtTime.toString());
    }
}

abstract class LevelAction
{
    public abstract Action(): void
}

class SpawnAction extends LevelAction
{
    Spawnable: GameObject;

    constructor(Spawnable: GameObject)
    {
        super();
        this.Spawnable = Spawnable;
    }

    public Action(): void
    {
        Game.Instantiate(this.Spawnable);
    }
}