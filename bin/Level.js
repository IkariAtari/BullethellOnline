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
        this.BlockWords = [
            'bullet',
            'pattern',
            'enemy',
            'path',
            'level',
            'start',
            'action'
        ];
        this.StatementWords = [
            'print',
            'spawn',
            'shoot',
            'health',
            'spawnat',
            'move'
        ];
        this.Variables = new Array();
        this.Blocks = new Array();
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
        this.Interpet();
    }
    Interpet() {
        let file = "LEVEL START PRINT \"KAAS\" END END";
        this.Tokens = file.split(";");
        this.Tokens = file.split(/\s+/);
        this.MakeBlockList(this.Tokens);
        this.BuildLevel();
    }
    MakeBlockList(_toProcess) {
        let _backlog = 0;
        let _tokens = new Array();
        let _startToken;
        for (let i = 0; i < _toProcess.length; i++) {
            if (this.BlockWords.includes(_toProcess[i].toLowerCase())) {
                _backlog++;
                _startToken = i;
            }
            if (_toProcess[i].toLowerCase() == "end") {
                _backlog--;
                if (_backlog == 0) {
                    let _block = new Block();
                    let _blockCode = _toProcess.slice(_startToken + 1, i - 1);
                    for (let j = 0; j < _blockCode.length; j++) {
                        if (this.StatementWords.includes(_blockCode[j].toLowerCase())) {
                            let _statement;
                            switch (_blockCode[j].toLowerCase()) {
                                case "print":
                                    _statement = new PrintStatement();
                                    _statement.Arguments.push(_blockCode[j + 1]);
                                    break;
                            }
                            _block.Commands.push(_statement);
                        }
                        else if (this.BlockWords.includes(_blockCode[j].toLowerCase())) {
                        }
                        else {
                        }
                    }
                    this.Blocks.push(_block);
                }
            }
        }
        console.log(this.Blocks);
        return _tokens;
    }
    ProcessBlock(_type, _block) {
    }
    BuildLevel() {
        for (let i = 0; i < this.Blocks.length; i++) {
            this.Blocks[i].RunBlock();
        }
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
class Statement {
    constructor() {
        this.Arguments = new Array();
    }
    Run() {
    }
}
class PrintStatement extends Statement {
    Run() {
        console.log(this.Arguments[0]);
    }
}
class Block {
    constructor() {
        this.Commands = new Array();
    }
    RunBlock() {
        for (let i = 0; i < this.Commands.length; i++) {
            this.Commands[i].Run();
        }
    }
}
//# sourceMappingURL=Level.js.map