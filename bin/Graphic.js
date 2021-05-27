class Graphic {
    constructor() { }
    Draw() { }
}
class Rect extends Graphic {
    constructor(Length, Height, Color) {
        super();
        this.Length = Length;
        this.Height = Height;
        this.Color = Color;
    }
    Draw() {
        Context.beginPath();
        Context.fillStyle = this.Color;
        Context.fillRect(this.Position.x, this.Position.y, this.Length, this.Height);
    }
}
//# sourceMappingURL=Graphic.js.map