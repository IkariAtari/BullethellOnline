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
        'bullet',
        'pattern',
        'enemy',
        'path',
        'level',
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

    private Variables: Array<any> = new Array<any>();

    private MasterBlocks: Array<Block> = new Array<Block>();

    public Patterns: Pattern[] =
    [
        new Pattern(
            new Array(
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(-5, 0.2), 0.2),
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(-2.5, 0.2), 0.2),
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(0, 0.2), 0.2),
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(2.5, 0.2), 0.2),
                new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(5, 0.2), 0.2)
            ),
            0,
            ""
        )
    ];

    public Level: LevelTick[] = 
    [
       new LevelTick(
            0, 
            new SpawnAction(
                new Player(
                    new Point(40, 40), 
                    new Rect(10, 10, "green"), 
                    new BoxCollider(10, 10, new Point(40, 40))
                )
            )
        ),
        new LevelTick(
            500, 
            new SpawnAction(
                new Enemy(
                    100, 
                    new Rect(10, 10, "purple"), 
                    new BoxCollider(10, 10, new Point(40, 10)),
                    10,
                    new EnemyPath([
                        ["move", 10, new Point(150, 200)],
                        ["move", 50, new Point(400, 100)],
                        ["shoot", 55, this.Patterns[0]],
                        ["shoot", 60, this.Patterns[0]],
                        ["shoot", 70, this.Patterns[0]],
                        ["shoot", 80, this.Patterns[0]],
                        ["shoot", 90, this.Patterns[0]]
                    ]),
                    0.1
                )
            )
        ),
    ];

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

    private ProcessBlock(_type:string, _code:Array<string>) : void
    {
        let _block:Block = new Block();
        
        for(let i:number = 0; i < _code.length; i++)
        {
            if(this.StatementWords.includes(_code[i].toLowerCase()))
            {
                let _statement:Statement;

                switch(_code[i].toLowerCase())
                {
                    case "print":
                        _statement = new PrintStatement();

                        _statement.Arguments.push(_code[i] + 1]);
                    break;
                }

                _block.Commands.push(_statement);
            }
            else if(this.BlockWords.includes(_code[i].toLowerCase()))
            {
                let _backlog:number = 0;
                let _block:Block = new Block();
                //let _blockCode:Array<string> = _toProcess.slice(_startToken + 1, i - 1);
            }
            else
            {

            }
        }
    }

    private Block(_code:Array<string>)
    {
        for(let i:number = 0; i < _code.length; i++)
        {
            // If it is a block
            if(this.BlockWords.includes(_code[i].toLowerCase()))
            {    
                _isDirty = true;
            }
            else if(_toProcess[i].toLowerCase() == "end")
            {
                _isDirty = false;

                let _blockCode:Array<string> = _toProcess.slice(_startToken + 1, i - 1);
                let _block:Block = new Block();

                this.ProcessBlock("", _blockCode);

                //this.MasterBlocks.push(_blockCode);
            }
            else
            {
                // throw cannot process statement outside of master block exception
            }
        }
    }

    // ! method should be in it's own class
    private MakeBlockList(_toProcess:Array<string>) : Array<string>
    {
        let _isDirty:boolean = false;
        let _tokens = new Array<string>();
        let _startToken:number;

        // Iterate to each token, this should handle master blocks
        for(let i:number = 0; i < _toProcess.length; i++)
        {
            // If it is a block
            if(this.BlockWords.includes(_toProcess[i].toLowerCase()))
            {     
                _startToken = i;
                _isDirty = true;
            }
            else if(_toProcess[i].toLowerCase() == "end")
            {
                _isDirty = false;

                let _blockCode:Array<string> = _toProcess.slice(_startToken + 1, i - 1);
                let _block:Block = new Block();

                this.ProcessBlock("", _blockCode);

                //this.MasterBlocks.push(_blockCode);
            }
            else
            {
                // throw cannot process statement outside of master block exception
            }
        }
        
        console.log(this.MasterBlocks);

        return _tokens;
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
                this.Level[this.Tick].Action.Action();
                
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
    public Action: LevelAction;

    constructor(AtTime: number, Action: LevelAction)
    {
        this.AtTime = AtTime;
        this.Action = Action;

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