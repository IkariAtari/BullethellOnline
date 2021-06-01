import { Behaviour } from './Behaviour';
import { GameManager } from './GameManager';
export class GameObject extends Behaviour {
    constructor(Position, Graphic, Collider, Tag = "none") {
        super();
        this.Position = Position;
        this.Graphic = Graphic;
        this.Collider = Collider;
        this.Tag = Tag;
        if (GameObject.Count == null) {
            GameObject.Count = 0;
        }
        else {
            GameObject.Count += 1;
        }
        this.ID = GameObject.Count;
    }
    Start() {
    }
    LogicUpdate() {
        this.Graphic.Position = this.Position;
        this.Collider.Posistion = this.Position;
        for (let i = 0; i < GameManager.GameObjects.length; i++) {
            if (GameManager.GameObjects[i] != this) {
                GameObject.CheckCollision(this, GameManager.GameObjects[i]);
            }
        }
    }
    Draw() {
        this.Graphic.Draw();
    }
    static CheckCollision(a, b) {
        if (a.Collider.CheckCollision(b.Collider)) {
            b.OnCollision(a);
        }
    }
    OnCollision(Collision) {
    }
}
//# sourceMappingURL=GameObject.js.map