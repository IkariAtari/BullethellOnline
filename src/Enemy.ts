import { BoxCollider } from "./Core/Collider";
import { GameObject } from "./Core/GameObject";
import { Point } from "./Core/Point";
import { Graphic } from './Core/Graphic';
import { GameManager } from "./Core/GameManager";
import { GameConsole } from "./Core/GameConsole";
import { Level } from "./Level";
import { Pattern } from "./Pattern";
import { Console } from "console";

export class Enemy extends GameObject 
{
    public Health: number;

    public Path: EnemyPath;

    public Speed: number;
    public Target: Point;

    public isOnHold: boolean = false;

    public Tick: number;
    public Iteration: number;

    private isLocked: boolean = false;

    constructor(Position: Point, Graphic: Graphic, Collider: BoxCollider, Health: number, Path: EnemyPath, Speed: number) 
    {
        super(Position, Graphic, Collider);

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
            GameManager.RemoveGameObject(this);
        }

        if(this.Path.Actions === undefined)
        {
            return;
        }

        // Run async

        if (this.Tick < this.Path.Actions.length) 
        {
            if (this.Iteration == parseInt(this.Path.Actions[this.Tick][1])) 
            {
                switch (this.Path.Actions[this.Tick][0]) 
                {
                    case "Move":
                        this.Target = Point.DecodePoint(this.Path.Actions[this.Tick][2]);

                        //console.log(Point.Normalize(Point.Direction(this.Position, this.Target)));
                        break;

                    case "Speed":

                        break;
                    case "Shoot" :
                            // Get pattern from level

                            // Create new instance from already made instance, maybe works, maybe
                            let pattern: Pattern = Object.assign(new Pattern(new Array(), 0, ""), Level.Patterns.get(this.Path.Actions[this.Tick][2]));

                            console.log(pattern);

                            pattern.Fire(this.Position);
                        break;

                    case "StartInterval" :

                        break;
                    
                    case "StopInterval":

                        break;

                    case "SetVar":

                        break;
                    case "DeclareVar":
                        
                        break;
                    default:
                        GameConsole.LogWarning(`No such enemy command: <b>${this.Path.Actions[this.Tick][0]}</b>`)
                        break;
                }

                this.Tick += 1;
            }
        }

        // Move towards target, it will always try to move towards something, if there's no target it will stay still
        if(this.Target != undefined)
        {
            let dir = Point.Direction(this.Position, this.Target) as Point;
            this.Position = Point.Add(this.Position, Point.Normalize(new Point(dir.x * this.Speed, dir.y * this.Speed)));
        }

        this.Iteration += 1;
    }

    private MoveRoutine(): void
    {

    }


    public Hurt(Damage: number): void 
    {
        this.Health -= Damage;
    }

    public static GetSpawnPosition(x: number): Point
    {
        return new Point(x, -10);
    }
}

export class EnemyPath 
{
    public Actions: string[][];

    constructor(Actions: string[][]) 
    {
        this.Actions = Actions;
    }
}