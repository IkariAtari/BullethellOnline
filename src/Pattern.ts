class Pattern
{
    public Bullets: Bullet[];
    public Interval: number;
    //public PlayerPosition: Point;

    private interval;
    
    constructor(Bullets: Bullet[], Interval: number)
    {
        this.Bullets = Bullets;
        this.Interval = Interval;
    }

    public Fire(Position: Point): void
    {
        for(let i = 0; i < this.Bullets.length; i++)
        {
            this.Bullets[i].Position = Position;

            Game.Instantiate(this.Bullets[i]);
        }
    }

    public PatternStep()
    {

    }

    public StartPattern(Position: Point)
    {
        this.interval = setInterval(() => this.PatternStep(), 10);
    }

    public StopPattern()
    {
        clearInterval(this.interval);
    }
}