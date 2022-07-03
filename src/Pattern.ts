import { Bullet } from "./Bullet";
import { BoxCollider } from "./Core/Collider";
import { GameManager } from "./Core/GameManager";
import { Rect } from "./Core/Rect";
import { Point } from "./Core/Point";

export class Pattern
{
    /*
    * create array of different commands
    * we can then process these command when the pattern is run
    * the commands come from a base command class
    */
   
    public Bullets: Array<string[]>;
    public Interval: number; 
    public PatternCode: string;
    //public PlayerPosition: Point;

    //public PlayerPosition: Point;
    private interval: NodeJS.Timeout;
    
    constructor(Bullets: Array<string[]>, Interval: number, PatternCode: string)
    {
        this.Bullets = Bullets;
        this.Interval = Interval;
        this.PatternCode = PatternCode
    }

    public Fire(Position: Point): void
    {
        for(let i = 0; i < this.Bullets.length; i++)
        {
            // Create new bullet instances
            let _bulletArray: string[] = this.Bullets[i];

            let _bullet: Bullet = new Bullet(Position, new Rect(5, 5, "red"), new BoxCollider(5, 5, Point.DecodePoint(_bulletArray[0])), "EnemyBullet", Point.DecodePoint(_bulletArray[1]), parseFloat(_bulletArray[2]));

            console.log("A pattern has fired!");

            GameManager.Instantiate(_bullet);
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