import { GameManager } from "./GameManager";
import { Graphic } from "./Graphic";
export class Sprite extends Graphic {
    constructor(ImageURL) {
        super();
        this.ImageURL = "Img/" + ImageURL + ".png";
        this.Image = new Image();
        this.Image.src = this.ImageURL;
    }
    Draw() {
        GameManager.Context.drawImage(this.Image, this.Position.x, this.Position.y, 50, 50);
    }
}
//# sourceMappingURL=Sprite.js.map