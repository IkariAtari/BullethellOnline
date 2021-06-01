import { Bullet } from "./Bullet";
import { GameManager } from "./Core/GameManager";
import { Point } from "./Core/Point";

export class Pattern
{
    /*
    * create array of different commands
    * we can then process these command when the pattern is run
    * the commands come from a base command class
    */
   
    public Bullets: Bullet[];
    public Interval: number;
    public PatternCode: string;
    //public PlayerPosition: Point;

    //public PlayerPosition: Point;
    private interval: NodeJS.Timeout;
    
    constructor(Bullets: Bullet[], Interval: number, PatternCode: string)
    {
        this.Bullets = Bullets;
        this.Interval = Interval;
        this.PatternCode = PatternCode
    }

    public Fire(Position: Point): void
    {
        for(let i = 0; i < this.Bullets.length; i++)
        {
            this.Bullets[i].Position = Position;

            GameManager.Instantiate(this.Bullets[i]);
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