import { BoxCollider } from "./Core/Collider";
import { GameManager } from "./Core/GameManager";
import { Rect } from "./Core/Graphic";
import { Point } from "./Core/Point";
import { Player } from "./Player";
export class Level {
    constructor() {
        this.BlockWords = [
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
        this.RootBlockWords = [
            'bullet',
            'pattern',
            'enemy',
            'path',
            'level'
        ];
        this.Variables = new Array();
        this.MasterBlocks = new Array();
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
    ProcessBlock(_type, _code, isMasterBlock, referenceBlock = undefined) {
        let _block = new Block();
        for (let i = 0; i < _code.length; i++) {
            if (this.StatementWords.includes(_code[i].toLowerCase())) {
                let _statement;
                _statement.ParentBlock = _block;
                switch (_code[i].toLowerCase()) {
                    case "print":
                        _statement = new PrintStatement();
                        _statement.Arguments.push(_code[i + 1]);
                        break;
                }
                _block.Commands.push(_statement);
            }
            else if (this.BlockWords.includes(_code[i].toLowerCase())) {
                switch (_code[i].toLowerCase()) {
                    case "start":
                        break;
                    case "action":
                        break;
                }
                let _newBlock = _code.slice(i);
                let _processedBlock = this.CreateBlock(_newBlock);
                this.ProcessBlock("", _processedBlock, false, _block);
            }
            else if (this.RootBlockWords.includes(_code[i].toLowerCase())) {
            }
            else {
            }
        }
        if (isMasterBlock) {
            this.MasterBlocks.push(_block);
        }
        else {
            if (referenceBlock != undefined) {
                referenceBlock.Commands.push(_block);
            }
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
                    let _blockCode = _code.slice(1, i);
                    if (_blockCode.length == 0) {
                        _blockCode.push(" ");
                    }
                    return _blockCode;
                }
            }
        }
    }
    MakeBlockList(_toProcess) {
        for (let i = 0; i < _toProcess.length; i++) {
            if (this.RootBlockWords.includes(_toProcess[i])) {
                let _blockCode = _toProcess.slice(i, undefined);
                _blockCode = this.CreateBlock(_blockCode);
                this.ProcessBlock("", _blockCode, true);
            }
        }
        console.log(this.MasterBlocks);
    }
    BuildLevel() {
        for (let i = 0; i < this.MasterBlocks.length; i++) {
            this.MasterBlocks[i].RunBlock();
        }
    }
    LogicUpdate() {
        if (this.Tick < this.Level.length) {
            if (this.Iteration == this.Level[this.Tick].AtTime) {
                for (let i = 0; i < this.Level[this.Tick].Actions.length; i++) {
                    this.Level[this.Tick].Actions[i].Action();
                }
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
class SpawnStatement extends Statement {
    Run() {
        if (super.ParentBlock instanceof StartBlock) {
            if (this.Arguments[0] == "player") {
                super.ParentBlock.Tick.Actions.push(new SpawnAction(new Player(new Point(40, 40), new Rect(10, 10, "green"), new BoxCollider(10, 10, new Point(40, 40)))));
            }
        }
        else {
        }
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
class StartBlock extends Block {
    constructor() {
        super(...arguments);
        this.Tick = new LevelTick(0);
    }
    RunBlock() {
        super.RunBlock();
    }
}
//# sourceMappingURL=Level.js.map