import { BoxCollider } from "./Core/Collider";
import { GameConsole } from "./Core/GameConsole";
import { GameManager } from "./Core/GameManager";
import { Rect } from "./Core/Rect";
import { Point } from "./Core/Point";
import { Sprite } from "./Core/Sprite";
import { Enemy, EnemyPath } from "./Enemy";
import { Pattern } from "./Pattern";
import { Player } from "./Player";
import TestLevel from "./TestLevel.json";
export class Level {
    constructor() {
        this.GlobalVariables = new Map();
        this.Level = new Array();
        this.Instances = 0;
        this.Tick = 0;
        this.Iteration = 0;
        this.PlayLevel("");
    }
    PlayLevel(_code) {
        let _errorcode = this.LoadLevel("Hoi");
        console.log(_errorcode);
        switch (_errorcode) {
            case 0:
                GameConsole.LogMessage("<span style='color:#33ff74'>Level built without errors!</span>");
                break;
            case 1:
                GameConsole.LogError("Level failed to load due to critical error");
                break;
        }
    }
    LoadLevel(_levelJSON) {
        let _level = JSON.parse(JSON.stringify(TestLevel));
        let _patterns = _level[0].Patterns;
        this.CompilePatterns(_patterns);
        console.log(Level.Patterns);
        console.log(this.Level);
        let _levelObj = _level[0].Level;
        let _entries = Object.entries(_levelObj);
        for (let e = 0; e < _entries.length; e++) {
            let _entry = _entries[e];
            const _time = parseInt(_entry[0]);
            let _levelActions = new Array();
            let _actions = Object.entries(_entry[1])[0][1];
            for (let a = 0; a < _actions.length; a++) {
                let _action = _actions[a];
                switch (_action.ActionType) {
                    case "SpawnAction":
                        if (_action.SpawnType == "Player") {
                            const _positionString = _action.Position;
                            const _posistion = new Point(parseFloat(_positionString.split(",")[0]), parseFloat(_positionString.split(",")[1]));
                            _levelActions.push(new SpawnAction(new Player(_posistion, new Rect(5, 5, "red"), new BoxCollider(5, 5, _posistion))));
                            if (_time != 0) {
                                GameConsole.LogError("Player spawn is outside time 0");
                                return 1;
                            }
                            break;
                        }
                        else {
                            let _enemies = _action.Enemies;
                            for (let i = 0; i < _enemies.length; i++) {
                                let _enemy = _enemies[i];
                                let _enemyPath = new EnemyPath(_enemy.EnemyPath);
                                let _enemyObject = new Enemy(Enemy.GetSpawnPosition(parseFloat(_enemy.Position)), new Sprite("Placeholder"), new BoxCollider(7, 7, Enemy.GetSpawnPosition(parseFloat(_enemy.Position))), _enemy.Health, _enemyPath, _enemy.StartSpeed);
                                _levelActions.push(new SpawnAction(_enemyObject));
                            }
                        }
                        break;
                    case "ConsoleLog":
                        _levelActions.push(new LogAction(_action.Message));
                        break;
                    case "Declare":
                        if (this.GlobalVariables.has(_action.Name)) {
                            GameConsole.LogError(`Cannot declare more than one variable with the same name: <b>${_action.Name}</b>`);
                            console.log("About to return 1");
                            return 1;
                        }
                        this.GlobalVariables.set(_action.Name, _action.Value);
                        break;
                    case "Execute":
                        break;
                    default:
                        GameConsole.LogError(`No such action type: <b>${_action.ActionType}</b>`);
                        break;
                }
            }
            let _tick = new LevelTick(_time);
            _tick.Actions = _levelActions;
            this.Level.push(_tick);
        }
        console.log(this.GlobalVariables);
        this.isStarted = true;
        return 0;
    }
    CompilePatterns(_patterns) {
        for (let i = 0; i < _patterns.length; i++) {
            let _patternObj = _patterns[i];
            let _bullets = new Array();
            for (let j = 0; j < _patternObj.Bullets.length; j++) {
                let _bullet = _patternObj.Bullets[j];
                _bullets[j] = [_bullet[0], _bullet[4], _bullet[5]];
            }
            let _pattern = new Pattern(_bullets, _patternObj.Interval, "");
            Level.Patterns.set(_patternObj.Name, _pattern);
        }
    }
    LogicUpdate() {
        if (GameManager.isDebug) {
        }
        if (this.isStarted != true) {
            return;
        }
        if (this.Tick < this.Level.length) {
            if (this.Iteration == this.Level[this.Tick].AtTime) {
                for (let i = 0; i < this.Level[this.Tick].Actions.length; i++) {
                    this.Level[this.Tick].Actions[i].Action();
                }
                this.Tick++;
            }
        }
        this.Iteration += 1;
        GameManager.Context.clearRect(0, 0, 800, 800);
        for (let i = 0; i < GameManager.GameObjects.length; i++) {
            GameManager.GameObjects[i].LogicUpdate();
        }
        this.DrawUpdate();
    }
    DrawUpdate() {
        if (this.isStarted != true) {
            return;
        }
        GameManager.Context.fillStyle = "black";
        GameManager.Context.fillRect(0, 0, GameManager.GameWidth, GameManager.GameHeight);
        for (let i = 0; i < GameManager.GameObjects.length; i++) {
            GameManager.GameObjects[i].Draw();
        }
    }
}
Level.Patterns = new Map();
class LevelTick {
    constructor(AtTime) {
        this.AtTime = AtTime;
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
class LogAction extends LevelAction {
    constructor(Message) {
        super();
        this.Message = Message;
    }
    Action() {
        GameConsole.LogMessage(this.Message);
    }
}
class LevelCodeExecute extends LevelAction {
    constructor() {
        super();
    }
    Action() {
    }
}
//# sourceMappingURL=Level.js.map