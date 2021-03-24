abstract class Graphic 
{
    Position: Point;

    constructor() 
    {

    }

    public Draw(): void 
    {

    }
}

class Rect extends Graphic
{
    Length: number;
    Height: number;
    Color: string;

    constructor(Length: number, Height: number, Color: string)
    {
        super();
        
        this.Length = Length;
        this.Height = Height;
        this.Color = Color;
    }

    public Draw(): void
    {   
        Context.beginPath();
        Context.fillStyle = this.Color;
        Context.fillRect(this.Position.x, this.Position.y, this.Length, this.Height);
    }
}