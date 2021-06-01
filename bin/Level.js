import { Bullet } from "./Bullet";
import { BoxCollider } from "./Core/Collider";
import { GameManager } from "./Core/GameManager";
import { Rect } from "./Core/Graphic";
import { Point } from "./Core/Point";
import { Enemy, EnemyPath } from "./Enemy";
import { Pattern } from "./Pattern";
import { Player } from "./Player";
export class Level {
    constructor() {
        this.Patterns = [
            new Pattern(new Array(new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(-5, 0.2), 0.2), new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(-2.5, 0.2), 0.2), new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(0, 0.2), 0.2), new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(2.5, 0.2), 0.2), new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(5, 0.2), 0.2)), 0, "")
        ];
        this.Level = [
            new LevelTick(0, new SpawnAction(new Player(new Point(40, 40), new Rect(10, 10, "green"), new BoxCollider(10, 10, new Point(40, 40))))),
            new LevelTick(500, new SpawnAction(new Enemy(100, new Rect(10, 10, "purple"), new BoxCollider(10, 10, new Point(40, 10)), 10, new EnemyPath([
                ["move", 10, new Point(150, 200)],
                ["move", 50, new Point(400, 100)],
                ["shoot", 55, this.Patterns[0]],
                ["shoot", 60, this.Patterns[0]],
                ["shoot", 70, this.Patterns[0]],
                ["shoot", 80, this.Patterns[0]],
                ["shoot", 90, this.Patterns[0]]
            ]), 0.1))),
        ];
        this.Tick = 0;
        this.Iteration = 0;
        this.LoadLevel();
    }
    LoadLevel() {
        let file = "LEVEL START SPAWN PLAYER END END";
        let tokens = file.split(/\s+/);
        tokens.forEach(Element => console.log(Element));
    }
    LogicUpdate() {
        if (this.Tick < this.Level.length) {
            if (this.Iteration == this.Level[this.Tick].AtTime) {
                this.Level[this.Tick].Action.Action();
                this.Tick++;
            }
        }
        this.Iteration += 1;
        GameManager.Context.clearRect(0, 0, 500, 500);
        for (let i = 0; i < GameManager.GameObjects.length; i++) {
            GameManager.GameObjects[i].LogicUpdate();
        }
        this.DrawUpdate();
    }
    DrawUpdate() {
        for (let i = 0; i < GameManager.GameObjects.length; i++) {
            GameManager.GameObjects[i].Draw();
        }
    }
}
class LevelTick {
    constructor(AtTime, Action) {
        this.AtTime = AtTime;
        this.Action = Action;
        console.log("Initated level action at: " + this.AtTime.toString());
    }
}
class LevelAction {
}
class SpawnAction extends LevelAction {
    constructor(Spawnable) {
        super();
        this.Spawnable = Spawnable;
    }
    Action() {
        GameManager.Instantiate(this.Spawnable);
    }
}
//# sourceMappingURL=Level.js.map