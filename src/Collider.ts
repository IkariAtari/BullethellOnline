class Collider
{
    constructor()
    {

    }

    public CheckCollision(a: Collider): boolean
    {
        return false;
    }
}

class BoxCollider extends Collider
{
    Posistion: Point;
    Width: number;
    Height: number;
    
    constructor(Width: number, Height: number, Position: Point)
    {
        super();

        this.Width = Width;
        this.Height = Height;
        this.Posistion = Position;

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