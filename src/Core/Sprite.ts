import { GameManager } from "./GameManager";
import { Graphic } from "./Graphic";

export class Sprite extends Graphic
{
    public ImageURL: string;

    public Image: HTMLImageElement;

    constructor(ImageURL: string)
    {
        super();
        
        this.ImageURL = "Img/" + ImageURL + ".png";

        this.Image = new Image()
        this.Image.src = this.ImageURL;
    }

    public Draw(): void 
    {
        GameManager.Context.drawImage(this.Image, this.Position.x, this.Position.y, 50, 50);
    }
}