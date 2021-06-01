import { Level } from "../Level";
import { Input } from "./Input";
export class GameManager {
    constructor() {
        console.log("Game instance created");
        GameManager.Context = document.getElementById("canvas").getContext("2d");
        this.CurrentLevel = new Level();
        this.timer = setInterval(() => this.GameUpdate(), 10);
    }
    static Instantiate(GameObject) {
        GameManager.GameObjects[GameManager.GameObjects.length] = GameObject;
    }
    static RemoveGameObject(GameObject) {
        for (let i = 0; i < GameManager.GameObjects.length; i++) {
            if (GameManager.GameObjects[i].ID == GameObject.ID) {
                GameManager.GameObjects.splice(i, 1);
                console.log(GameManager.GameObjects);
            }
        }
    }
    GameUpdate() {
        Input.HandleKeys();
        this.CurrentLevel.LogicUpdate();
    }
}
GameManager.GameObjects = [];
//# sourceMappingURL=GameManager.js.map