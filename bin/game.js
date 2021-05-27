var Canvas = document.getElementById("canvas");
var Context = Canvas.getContext("2d");
class Game {
    constructor() {
        console.log("Game instance created");
        this.CurrentLevel = new Level();
        this.timer = setInterval(() => this.GameUpdate(), 10);
    }
    static Instantiate(GameObject) {
        Game.GameObjects[Game.GameObjects.length] = GameObject;
        //console.log(Game.GameObjects);
    }
    static RemoveGameObject(GameObject) {
        for (let i = 0; i < Game.GameObjects.length; i++) {
            if (Game.GameObjects[i].ID == GameObject.ID) {
                Game.GameObjects.splice(i, 1);
                console.log(Game.GameObjects);
            }
        }
    }
    GameUpdate() {
        Input.HandleKeys();
        this.CurrentLevel.LogicUpdate();
    }
}
Game.GameObjects = [];
//# sourceMappingURL=Game.js.map