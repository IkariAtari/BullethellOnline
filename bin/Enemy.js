import { GameObject } from "./Core/GameObject";
import { Point } from "./Core/Point";
import { GameManager } from "./Core/GameManager";
import { GameConsole } from "./Core/GameConsole";
import { Level } from "./Level";
import { Pattern } from "./Pattern";
export class Enemy extends GameObject {
    constructor(Position, Graphic, Collider, Health, Path, Speed) {
        super(Position, Graphic, Collider);
        this.isOnHold = false;
        this.isLocked = false;
        this.Health = Health;
        this.Path = Path;
        this.Speed = Speed;
        this.Tick = 0;
        this.Iteration = 0;
        this.Tag = "Enemy";
    }
    LogicUpdate() {
        super.LogicUpdate();
        if (this.Health <= 0) {
            GameManager.RemoveGameObject(this);
        }
        if (this.Path.Actions === undefined) {
            return;
        }
        if (this.Tick < this.Path.Actions.length) {
            if (this.Iteration == parseInt(this.Path.Actions[this.Tick][1])) {
                switch (this.Path.Actions[this.Tick][0]) {
                    case "Move":
                        this.Target = Point.DecodePoint(this.Path.Actions[this.Tick][2]);
                        break;
                    case "Speed":
                        break;
                    case "Shoot":
                        let pattern = Object.assign(new Pattern(new Array(), 0, ""), Level.Patterns.get(this.Path.Actions[this.Tick][2]));
                        console.log(pattern);
                        pattern.Fire(this.Position);
                        break;
                    case "StartInterval":
                        break;
                    case "StopInterval":
                        break;
                    case "SetVar":
                        break;
                    default:
                        GameConsole.LogWarning(`No such enemy command: <b>${this.Path.Actions[this.Tick][0]}</b>`);
                        break;
                }
                this.Tick += 1;
            }
        }
        if (this.Target != undefined) {
            let dir = Point.Direction(this.Position, this.Target);
            this.Position = Point.Add(this.Position, Point.Normalize(new Point(dir.x * this.Speed, dir.y * this.Speed)));
        }
        this.Iteration += 1;
    }
    MoveRoutine() {
    }
    Hurt(Damage) {
        this.Health -= Damage;
    }
    static GetSpawnPosition(x) {
        return new Point(x, -10);
    }
}
export class EnemyPath {
    constructor(Actions) {
        this.Actions = Actions;
    }
}
//# sourceMappingURL=Enemy.js.map