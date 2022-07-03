import {GameObject} from './Core/GameObject';
import {BoxCollider} from './Core/Collider';
import {Point} from './Core/Point'
import {Enemy} from './Enemy';
import {Graphic} from './Core/Graphic';
import { GameManager } from './Core/GameManager';

export class Bullet extends GameObject 
{
    public Velocity: Point;
    public Direction: Point;
    public Speed: number;

    constructor(Posistion: Point, Graphic: Graphic, Collider: BoxCollider, Tag: string, Direction: Point, Speed: number) 
    {
        super(Posistion, Graphic, Collider);

        this.Tag = Tag;


        this.Velocity = Point.Mult(Point.Normalize(Direction), Speed);

        console.log(Speed);
    }

    public LogicUpdate(): void 
    {
        super.LogicUpdate();
        
        // TODO: move by heading, and path
        //this.Velocity = Point.Mult(Point.Normalize(this.Direction), this.Speed);
        
        this.Position = Point.Add(this.Position, this.Velocity);

        if (this.Position.y <= 0) 
        {
            GameManager.RemoveGameObject(this);
        }
        if (this.Position.x <= 0) 
        {
            GameManager.RemoveGameObject(this);
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

                GameManager.RemoveGameObject(this);
            }
        }
    }
}