import { Level } from "../Level";
import { BoxCollider } from "./Collider";
import { GameConsole } from "./GameConsole";
import { GameObject } from "./GameObject";
import { Rect } from "./Rect";
import { Input } from "./Input";
import { Point } from "./Point";
export class GameManager {
    constructor() {
        console.log("Game instance created");
        GameManager.Context = document.getElementById("canvas").getContext("2d");
        let _canvas = document.getElementById("canvas");
        GameManager.GameWidth = _canvas.clientWidth;
        GameManager.GameHeight = _canvas.clientHeight;
        GameConsole.LOG_AREA = document.getElementById("console");
        this.CurrentLevel = new Level();
        this.timer = setInterval(() => this.GameUpdate(), 10);
    }
    static Instantiate(gameObject) {
        let _gameObject = Object.assign(new GameObject(new Point(0, 0), new Rect(0, 0, "black"), new BoxCollider(0, 0, new Point(0, 0))), gameObject);
        GameManager.GameObjects[GameManager.GameObjects.length] = gameObject;
        console.log(GameManager.GameObjects);
    }
    static RemoveGameObject(GameObject) {
        for (let i = 0; i < GameManager.GameObjects.length; i++) {
            if (GameManager.GameObjects[i].ID == GameObject.ID) {
                GameManager.GameObjects.splice(i, 1);
            }
        }
    }
    GameUpdate() {
        Input.HandleKeys();
        this.CurrentLevel.LogicUpdate();
    }
}
GameManager.GameObjects = [];
GameManager.isDebug = true;
//# sourceMappingURL=GameManager.js.map