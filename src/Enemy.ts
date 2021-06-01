import { BoxCollider } from "./Core/Collider";
import { GameObject } from "./Core/GameObject";
import { Point } from "./Core/Point";
import { Graphic } from './Core/Graphic';
import { GameManager } from "./Core/GameManager";

export class Enemy extends GameObject 
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
            GameManager.RemoveGameObject(this);
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

export class EnemyPath 
{
    public Actions: any[][];

    constructor(Actions: any[][]) 
    {
        this.Actions = Actions;
    }
}