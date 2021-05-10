module Colliders
{
    import * as Graphics from './Graphics';

    abstract class Collider
    {
        constructor() { }

        public CheckCollision(a: Collider): boolean
        {
            return false;
        }
    }

    export class BoxCollider extends Collider
    {
        Posistion: Point;
        Width: number;
        Height: number;
        Rect: Graphics.Rect;
        
        constructor(Width: number, Height: number, Position: Point)
        {
            super();

            this.Width = Width;
            this.Height = Height;
            this.Posistion = Position;

            this.Rect = new Rect(Width, Height, "green");

            //console.log("Collider created");
        }
        
        public CheckCollision(a: BoxCollider): boolean
        {
            if(this.Posistion.x < a.Posistion.x + a.Width && this.Posistion.x + this.Width > a.Posistion.x && this.Posistion.y < a.Posistion.y + a.Height && this.Posistion.y + this.Height > a.Posistion.y)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}