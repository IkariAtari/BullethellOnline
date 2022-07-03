import { Console } from "console";
import { runInContext } from "vm";
import { Type } from "../node_modules/typescript/lib/typescript";
import { Bullet } from "./Bullet";
import { BoxCollider } from "./Core/Collider";
import { GameConsole } from "./Core/GameConsole";
import { GameManager } from "./Core/GameManager";
import { GameObject } from "./Core/GameObject";
import { Rect } from "./Core/Rect";
import { Point } from "./Core/Point";
import { Sprite } from "./Core/Sprite";
import { Enemy, EnemyPath } from "./Enemy";
import { Pattern } from "./Pattern";
import { Player } from "./Player";
import TestLevel from "./TestLevel.json";

export class Level
{
    // ! Needs rethinking
    public static Patterns: Map<string, Pattern> = new Map<string, Pattern>();

    public GlobalVariables: Map<string, any> = new Map<string, any>();

    // Contains all levelticks which are like keyframes in an animation
    public Level: Array<LevelTick> = new Array<LevelTick>();

    public Tick: number;
    private Iteration: number;
 
    private isStarted: boolean;

    private Instances: number = 0;

    constructor()
    {
        this.Tick = 0;
        this.Iteration = 0;

        this.PlayLevel("");
    }

    public PlayLevel (_code: string): void
    {
        let _errorcode = this.LoadLevel("Hoi");
        console.log(_errorcode);
        //console.log(this.Instances);

        switch(_errorcode)
        {
            // Success
            case 0:
                GameConsole.LogMessage("<span style='color:#33ff74'>Level built without errors!</span>");
            break;

            case 1:
                GameConsole.LogError("Level failed to load due to critical error")
            break;
        }
    }

    public LoadLevel (_levelJSON: string): number
    {
        let _level = JSON.parse(JSON.stringify(TestLevel));

        // Get all patterns, enemys and bullets from the definitions
        
        // Handle imports

        // Handle patterns
        let _patterns = _level[0].Patterns;

        this.CompilePatterns(_patterns);

        console.log(Level.Patterns);
        console.log(this.Level);

        // Handle enemies

        // Handle bullets
        
        //this.Instances++;
        
        // Build level ticks
        let _levelObj = _level[0].Level;

        let _entries:Array<any> = Object.entries(_levelObj);

        // Main level compile loop
        for(let e = 0; e < _entries.length; e++)
        {
            let _entry:Array<any> = _entries[e];

            const _time:number = parseInt(_entry[0]);

            let _levelActions:LevelAction[] = new Array();
            
            let _actions = Object.entries(_entry[1])[0][1] as Array<any>;

            for(let a = 0; a < _actions.length; a++)
            {
                let _action = _actions[a];

                switch(_action.ActionType)
                {
                    case "SpawnAction" :
                        // Find enemy in DB
                        // Player is a special type and gets it's own logic here
                        if(_action.SpawnType as string == "Player")
                        {
                            const _positionString:string = _action.Position as string;
                            const _posistion = new Point(parseFloat(_positionString.split(",")[0]), parseFloat(_positionString.split(",")[1]));

                            _levelActions.push(new SpawnAction(new Player(_posistion, new Rect(5, 5, "red"), new BoxCollider(5, 5, _posistion))) as SpawnAction);

                            if(_time != 0)
                            {
                                GameConsole.LogError("Player spawn is outside time 0");

                                // Stop compiling
                                return 1;
                            }

                            break;
                        }
                        else
                        {
                            // Enemy logic
                            let _enemies = _action.Enemies as Array<any>;

                            for(let i = 0; i < _enemies.length; i++)
                            {
                                let _enemy = _enemies[i];

                                let _enemyPath: EnemyPath = new EnemyPath(_enemy.EnemyPath);
                                
                                let _enemyObject = new Enemy(Enemy.GetSpawnPosition(parseFloat(_enemy.Position as string)), new Sprite("Placeholder"), new BoxCollider(7, 7, Enemy.GetSpawnPosition(parseFloat(_enemy.Position as string))), _enemy.Health, _enemyPath, _enemy.StartSpeed);

                                _levelActions.push(new SpawnAction(_enemyObject) as SpawnAction);
                            }
                        }
                    break;
                    case "ConsoleLog" :
                        _levelActions.push(new LogAction(_action.Message));
                    break;
                    case "Declare" :
                        // Variables will not be delcared at runtime but rather at compile time

                        if(this.GlobalVariables.has(_action.Name))
                        {
                            GameConsole.LogError(`Cannot declare more than one variable with the same name: <b>${_action.Name}</b>`)

                            console.log("About to return 1");

                            return 1;          
                        }

                        this.GlobalVariables.set(_action.Name, _action.Value);
                    break;
                    case "Execute" :
                        // Level code executions will be run at runtime


                    break;
                    default:

                        // Compile time error
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

    private CompilePatterns(_patterns: Array<any>): void
    {
        for(let i = 0; i < _patterns.length; i++)
        {
            let _patternObj:any = _patterns[i];

            let _bullets:Array<string[]> = new Array<string[]>();

            for(let j = 0; j < _patternObj.Bullets.length; j++)
            {
                let _bullet: Array<string> = _patternObj.Bullets[j];
                _bullets[j] = [_bullet[0], _bullet[4], _bullet[5]];
                //new Bullet(Point.DecodePoint(_bullet[0]), new Rect(5, 5, "red"), new BoxCollider(5, 5, Point.DecodePoint(_bullet[0])), _bullet[3], Point.DecodePoint(_bullet[4]), parseFloat(_bullet[5]));
            }

            let _pattern = new Pattern(_bullets, _patternObj.Interval, "");

            Level.Patterns.set(_patternObj.Name, _pattern);
        }
    }

    public LogicUpdate ()
    {
        if(GameManager.isDebug)
        {

        }

        if(this.isStarted != true)
        {
            return;
        }

        if (this.Tick < this.Level.length)
        {
            if (this.Iteration == this.Level[this.Tick].AtTime)
            {
                for (let i: number = 0; i < this.Level[this.Tick].Actions.length; i++)
                {
                    this.Level[this.Tick].Actions[i].Action();
                }

                this.Tick++;
            }
        }

        this.Iteration += 1;

        GameManager.Context.clearRect(0, 0, 800, 800);

        for (let i = 0; i < GameManager.GameObjects.length; i++)
        {
            GameManager.GameObjects[i].LogicUpdate();
        }

        this.DrawUpdate();
    }

    public DrawUpdate ()
    {
        if(this.isStarted != true)
        {
            return;
        }

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
    public abstract Action (): void
}

class SpawnAction extends LevelAction
{
    public Spawnable: GameObject;

    constructor(Spawnable: GameObject)
    {
        super();
        this.Spawnable = Spawnable;
    }

    public Action (): void
    {
        GameManager.Instantiate(this.Spawnable);
    }
}

class LogAction extends LevelAction
{
    public Message: string;

    constructor(Message: string)
    {
        super();
        this.Message = Message;
    }

    public Action(): void
    {
        GameConsole.LogMessage(this.Message);
    }
}

class LevelCodeExecute extends LevelAction
{
    constructor()
    {
        super();
    }

    public Action(): void
    {

    }
}