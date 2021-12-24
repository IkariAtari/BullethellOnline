import { Console } from "console";
import { runInContext } from "vm";
import { Type } from "../node_modules/typescript/lib/typescript";
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
    public Patterns: Array<Pattern>;

    // Contains all levelticks which are like keyframes in an animation
    public Level: Array<LevelTick> = new Array<LevelTick>();

    public Tick: number;
    private Iteration: number;

    constructor()
    {
        this.Tick = 0;
        this.Iteration = 0;

        this.PlayLevel("");
    }

    public PlayLevel (_code: string): void
    {
        this.LoadLevel(`[{"LevelName":"Test","Author":"Ikari","Pattern":{"Name":"Pattern1","Bullets":[["0,0","GraphicType","2","EnemyBullet","-5,0.2","0.3"]],"Interval":"2","Repeat":"5"},"Enemy":{},"Level":{"0":{"SpawnAction":{"Type":"Player","Position":"0,0"}},"2":{"SpawnActon":{"Type":"Enemy","Position":"0","Enemys":[{"Graphic":"GraphicName","Health":"100","EnemyPath":[["Move","4,5","10"],["Shoot","Pattern1"]]},{"Graphic":"GraphicName","Health":"100","EnemyPath":[["Move","4,5","10"],["Shoot","Pattern1"]]}]}}}}]`)
    }

    public LoadLevel (_levelJSON: string): void
    {
        let _level = JSON.parse(_levelJSON);


        // Get all patterns, enemys and bullets from the definitions

        console.log(_level);
        
        /*for (let i: number = 0; i < this.MasterBlocks.length; i++)
        {
            this.MasterBlocks[i].RunBlock();
        }*/
    }

    public LogicUpdate ()
    {
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

        GameManager.Context.clearRect(0, 0, 500, 500);

        for (let i = 0; i < GameManager.GameObjects.length; i++)
        {
            GameManager.GameObjects[i].LogicUpdate();
        }

        this.DrawUpdate();
    }

    public DrawUpdate ()
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
    public abstract Action (): void
}

class SpawnAction extends LevelAction
{
    Spawnable: GameObject;

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