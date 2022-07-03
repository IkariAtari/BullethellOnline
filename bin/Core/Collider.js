import { Rect } from "./Rect";
class Collider {
    constructor() { }
    CheckCollision(a) {
        return false;
    }
}
export class BoxCollider extends Collider {
    constructor(Width, Height, Position) {
        super();
        this.Width = Width;
        this.Height = Height;
        this.Posistion = Position;
        this.Rect = new Rect(Width, Height, "green");
    }
    CheckCollision(a) {
        if (this.Posistion.x < a.Posistion.x + a.Width && this.Posistion.x + this.Width > a.Posistion.x && this.Posistion.y < a.Posistion.y + a.Height && this.Posistion.y + this.Height > a.Posistion.y) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=Collider.js.map