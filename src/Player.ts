import { Bullet } from "./Bullet";
import { BoxCollider } from "./Core/Collider";
import { GameManager } from "./Core/GameManager";
import { GameObject } from "./Core/GameObject";
import { Graphic, Rect } from "./Core/Graphic";
import { Input } from "./Core/Input";
import { Point } from "./Core/Point";

export class Player extends GameObject 
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
                this.CurrentAngle = 270; // + value * 10;
                //for(let i = 0; i < 4; i++)
                //{
                    GameManager.Instantiate(new Bullet(this.Position, new Rect(5, 5, "red"), new BoxCollider(5, 5, this.Position), "PlayerBullet", Point.AngleToHeading(this.CurrentAngle), 3.5));
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