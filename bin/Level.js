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
        this.MasterBlocks = new Array();
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
    }
    PlayLevel(_code) {
        this.Interpet(_code);
    }
    Interpet(_code) {
        this.Tokens = _code.split(";");
        this.Tokens = _code.split(/\s+/);
        this.MakeBlockList(this.Tokens);
        this.BuildLevel();
    }
    ProcessBlock(_type, _code, isMasterBlock) {
        let _block = new Block();
        for (let i = 0; i < _code.length; i++) {
            if (this.StatementWords.includes(_code[i].toLowerCase())) {
                let _statement;
                switch (_code[i].toLowerCase()) {
                    case "print":
                        _statement = new PrintStatement();
                        _statement.Arguments.push(_code[i + 1]);
                        break;
                }
                _block.Commands.push(_statement);
            }
            else if (this.BlockWords.includes(_code[i].toLowerCase())) {
                let _newBlock = _code.slice(i, undefined);
                this.CreateBlock(_newBlock);
            }
            else {
            }
        }
        if (isMasterBlock) {
            this.MasterBlocks.push(_block);
        }
    }
    CreateBlock(_code) {
        let _backlog = 1;
        for (let i = 0; i < _code.length; i++) {
            if (this.BlockWords.includes(_code[i].toLowerCase())) {
                _backlog++;
            }
            else if (_code[i].toLowerCase() == "end") {
                _backlog--;
                if (_backlog == 0) {
                    let _blockCode = _code.slice(1, i - 1);
                    this.ProcessBlock("", _blockCode, false);
                }
            }
        }
    }
    MakeBlockList(_toProcess) {
        let _isDirty = false;
        let _tokens = new Array();
        let _startToken;
        for (let i = 0; i < _toProcess.length; i++) {
            if (this.BlockWords.includes(_toProcess[i].toLowerCase())) {
                _startToken = i;
                _isDirty = true;
            }
            else if (_toProcess[i].toLowerCase() == "end") {
                _isDirty = false;
                let _blockCode = _toProcess.slice(_startToken + 1, i - 1);
                this.ProcessBlock("", _blockCode, true);
            }
            else {
            }
        }
        console.log(this.MasterBlocks);
        return _tokens;
    }
    BuildLevel() {
        for (let i = 0; i < this.MasterBlocks.length; i++) {
            this.MasterBlocks[i].RunBlock();
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
            if (this.Commands[i] instanceof Statement) {
                this.Commands[i].Run();
            }
            else if (this.Commands[i] instanceof Block) {
                this.Commands[i].RunBlock();
            }
        }
    }
}
//# sourceMappingURL=Level.js.map