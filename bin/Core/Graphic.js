import { GameManager } from "./GameManager";
export class Graphic {
    constructor() { }
    Draw() { }
}
export class Rect extends Graphic {
    constructor(Length, Height, Color) {
        super();
        this.Length = Length;
        this.Height = Height;
        this.Color = Color;
    }
    Draw() {
        GameManager.Context.beginPath();
        GameManager.Context.fillStyle = this.Color;
        GameManager.Context.fillRect(this.Position.x, this.Position.y, this.Length, this.Height);
    }
}
//# sourceMappingURL=Graphic.js.map