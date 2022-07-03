import { Behaviour } from './Behaviour';
import { BoxCollider } from './Collider';
import { GameManager } from './GameManager';
import { Graphic } from './Graphic';
import { Point } from './Point';

export class GameObject extends Behaviour
{
    public Tag: string;

    public ID: number;

    public static Count: number;

    public Position: Point;

    // Angle for now, ofcourse a dedicated Transform class can be made
    public Rotation: number;

    public Graphic: Graphic;

    public Collider: BoxCollider;

    constructor(Position: Point, Graphic: Graphic, Collider: BoxCollider, Tag: string = "none") 
    {
        super()
        
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

    public RotateToAngle(Angle: number)
    {
        
    }

    public LogicUpdate(): void 
    {
        this.Graphic.Position = this.Position;
        this.Collider.Posistion = this.Position;

        for (let i = 0; i < GameManager.GameObjects.length; i++) 
        {
            if (GameManager.GameObjects[i] != this) {
                GameObject.CheckCollision(this, GameManager.GameObjects[i]);
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