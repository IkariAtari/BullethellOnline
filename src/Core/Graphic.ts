import { GameManager } from "./GameManager";
import { Point } from "./Point";

export abstract class Graphic 
{
    Position: Point;

    constructor() { }

    public Draw(): void { }
}

export class Rect extends Graphic 
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
        GameManager.Context.beginPath();
        GameManager.Context.fillStyle = this.Color;
        GameManager.Context.fillRect(this.Position.x, this.Position.y, this.Length, this.Height);
    }
}
