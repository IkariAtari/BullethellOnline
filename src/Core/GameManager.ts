import { Level } from "../Level";
import { GameObject } from "./GameObject";
import { Input } from "./Input";

export class GameManager
{
    public static GameObjects: GameObject[] = [];
    public static Context: CanvasRenderingContext2D;
    public CurrentLevel: Level;
    timer;

    constructor() 
    {
        console.log("Game instance created");
        
        GameManager.Context = document.getElementById("canvas").getContext("2d");

        this.CurrentLevel = new Level();

        this.timer = setInterval(() => this.GameUpdate(), 10);
    }

    public static Instantiate(GameObject: GameObject): void 
    {
        GameManager.GameObjects[GameManager.GameObjects.length] = GameObject;
        //console.log(Game.GameObjects);
    }

    public static RemoveGameObject(GameObject: GameObject): void
    {
        for(let i = 0; i < GameManager.GameObjects.length; i++)
        {
            if(GameManager.GameObjects[i].ID == GameObject.ID)
            {
                GameManager.GameObjects.splice(i, 1);

                //console.log(GameManager.GameObjects);
            }
        }
    }

    public GameUpdate() 
    {
        Input.HandleKeys();
        this.CurrentLevel.LogicUpdate();
    }
}