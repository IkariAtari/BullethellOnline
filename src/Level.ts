import { runInContext } from "vm";
import { Bullet } from "./Bullet";
import { BoxCollider } from "./Core/Collider";
import { GameManager } from "./Core/GameManager";
import { GameObject } from "./Core/GameObject";
import { Rect } from "./Core/Graphic";
import { Point } from "./Core/Point";
import { Enemy, EnemyPath } from "./Enemy";
import { Pattern } from "./Pattern";
import { Player } from "./Player";

export class Level 
{
    // TODO: temporary, could be it's own class
    private Tokens: Array<string>;

    private BlockWords: Array<string> = 
    [
        'start',
        'action'
    ]

    private StatementWords: Array<string> =
    [
        'print',
        'spawn',
        'shoot',
        'health',
        'spawnat',
        'move'
    ]

    private RootBlockWords: Array<string> =
    [
        'bullet',
        'pattern',
        'enemy',
        'path',
        'level'
    ]

    private Variables: Array<any> = new Array<any>();

    private MasterBlocks: Array<Block> = new Array<Block>();

    public Patterns: Array<Pattern>;
   

    public Level: Array<LevelTick>; 

    public Tick: number;
    private Iteration: number;

    constructor()
    {
        this.Tick = 0;
        this.Iteration = 0;

        // ! for testing purposes
    }

    public PlayLevel(_code:string) : void
    {
        this.Interpet(_code);
    }

    private Interpet(_code:string) : void
    {
        // interpet level file
        this.Tokens = _code.split(";");
        this.Tokens = _code.split(/\s+/);
        
        // make all code blocks
        this.MakeBlockList(this.Tokens)

        this.BuildLevel();
    }

    private ProcessBlock(_type:string, _code:Array<string>, isMasterBlock:boolean, referenceBlock:Block = undefined) : void
    {
        let _block:Block = new Block();

        for(let i:number = 0; i < _code.length; i++)
        {
            if(this.StatementWords.includes(_code[i].toLowerCase()))
            {
                let _statement:Statement;
                _statement.ParentBlock = _block;

                switch(_code[i].toLowerCase())
                {
                    case "print":
                        _statement = new PrintStatement();

                        _statement.Arguments.push(_code[i + 1]);
                    break;
                }

                _block.Commands.push(_statement);
            }
            else if(this.BlockWords.includes(_code[i].toLowerCase()))
            {
                switch(_code[i].toLowerCase())
                {
                    case "start":

                    break;

                    case "action":
                        //this.Level.push(new LevelTick(parseInt(_code[i + 1])), )
                    break;
                }

                let _newBlock:Array<string> = _code.slice(i);

                let _processedBlock:Array<string> = this.CreateBlock(_newBlock);

                this.ProcessBlock("", _processedBlock, false, _block);
            }
            else if(this.RootBlockWords.includes(_code[i].toLowerCase()))
            {
                // cannot make root block in block error
            }
            else
            {
                // throw invalid keyword error
            }
        }

        if(isMasterBlock)
        {
            this.MasterBlocks.push(_block)
        }
        else
        {
            if(referenceBlock != undefined)
            {
                referenceBlock.Commands.push(_block);
            }
        }
    }

    private CreateBlock(_code:Array<string>) : Array<string>
    {
        let _backlog:number = 1;

        for(let i:number = 0; i < _code.length; i++)
        {
            // If it is a block
            if(this.BlockWords.includes(_code[i].toLowerCase()))
            {    
                _backlog++;
            }
            else if(_code[i].toLowerCase() == "end")
            {
                _backlog--;

                if(_backlog == 0)
                {
                    let _blockCode:Array<string> = _code.slice(1, i);

                    if(_blockCode.length == 0)
                    {
                        _blockCode.push(" ");
                    }
                          
                    return _blockCode;
                }
            }
        }
    }

    // ! method should be in it's own class
    private MakeBlockList(_toProcess:Array<string>)
    {
        // Iterate to each token, this should handle master blocks
        for(let i:number = 0; i < _toProcess.length; i++)
        {
            // If it is a block
            if(this.RootBlockWords.includes(_toProcess[i]))
            {
                let _blockCode = _toProcess.slice(i, undefined)
                
                _blockCode = this.CreateBlock(_blockCode);

                this.ProcessBlock("", _blockCode, true);    
            }
        }
        
        console.log(this.MasterBlocks);
    }

    public BuildLevel() : void
    {
        for(let i:number = 0; i < this.MasterBlocks.length; i++)
        {
            this.MasterBlocks[i].RunBlock();
        }
    }

    public LogicUpdate()
    {
        if(this.Tick < this.Level.length)
        {
            if(this.Iteration == this.Level[this.Tick].AtTime)
            {
                for(let i:number = 0; i < this.Level[this.Tick].Actions.length; i++)
                {
                    this.Level[this.Tick].Actions[i].Action();
                }
                
                this.Tick++;
            }
        }

        this.Iteration += 1;

        GameManager.Context.clearRect(0, 0, 500, 500);

        for (let i = 0; i < GameManager.GameObjects.length; i++)
        {
            GameManager.GameObjects[i].LogicUpdate();
        }

        this.DrawUpdate();
    }

    public DrawUpdate() 
    {
        for (let i = 0; i < GameManager.GameObjects.length; i++) 
        {
            GameManager.GameObjects[i].Draw();
        }
    }
}

class LevelTick
{
    public AtTime: number;
    
    // Needs to be array of level actions
    public Actions: Array<LevelAction>;

    constructor(AtTime: number)
    {
        this.AtTime = AtTime;

        console.log("Initated level action at: " + this.AtTime.toString());
    }
}

abstract class LevelAction
{
    public abstract Action(): void
}

class SpawnAction extends LevelAction
{
    Spawnable: GameObject;

    constructor(Spawnable: GameObject)
    {
        super();
        this.Spawnable = Spawnable;
    }

    public Action(): void
    {
        GameManager.Instantiate(this.Spawnable);
    }
}

// ! temporary location
class Statement
{
    public Arguments:Array<any> = new Array<any>();
    public ParentBlock:Block;

    public Run(): void
    {
        // do action
    }
}

class PrintStatement extends Statement
{
    public Run(): void
    {
        console.log(this.Arguments[0]);
    }
}

class SpawnStatement extends Statement
{
    public Run(): void
    {
        if(super.ParentBlock instanceof StartBlock)
        {
            if(this.Arguments[0] == "player")
            {
                super.ParentBlock.Tick.Actions.push(new SpawnAction(new Player(new Point(40, 40), new Rect(10, 10, "green"), new BoxCollider(10, 10, new Point(40, 40)))))
            }
            
        }
        else
        {
            // throw error that this statement cannot be run outside a start or action block
        }
    }
}

class Block
{
    public Commands:Array<any> = new Array<any>();

    public RunBlock(): void
    {
        for(let i:number = 0; i < this.Commands.length; i++)
        {
            if(this.Commands[i] instanceof Statement)
            {
                this.Commands[i].Run();
            }
            else if(this.Commands[i] instanceof Block)
            {
                this.Commands[i].RunBlock();
            }
        }
    }
}

/*
 * There always needs to be one start block in the level
 */
class StartBlock extends Block
{
    public Tick:LevelTick = new LevelTick(0);

    public RunBlock(): void
    {
        super.RunBlock();
    }
}