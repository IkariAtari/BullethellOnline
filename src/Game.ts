var Canvas = document.getElementById("canvas");
var Context = Canvas.getContext("2d");

class Game 
{
    public static GameObjects: GameObject[] = [];
    CurrentLevel: Level;
    timer;

    constructor() 
    {
        console.log("Game instance created");
        
        this.CurrentLevel = new Level();

        this.timer = setInterval(() => this.GameUpdate(), 10);
    }

    public static Instantiate(GameObject: GameObject): void 
    {
        Game.GameObjects[Game.GameObjects.length] = GameObject;
        //console.log(Game.GameObjects);
    }

    public static RemoveGameObject(GameObject: GameObject): void
    {
        for(let i = 0; i < Game.GameObjects.length; i++)
        {
            if(Game.GameObjects[i].ID == GameObject.ID)
            {
                Game.GameObjects.splice(i, 1);

                console.log(Game.GameObjects);
            }
        }
    }

    public GameUpdate() 
    {
        Input.HandleKeys();
        this.CurrentLevel.LogicUpdate();
    }
}