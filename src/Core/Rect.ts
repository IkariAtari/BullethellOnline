import { GameManager } from "./GameManager";
import { Graphic } from "./Graphic";

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