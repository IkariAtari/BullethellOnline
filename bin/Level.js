import { GameManager } from "./Core/GameManager";
export class Level {
    constructor() {
        this.Level = new Array();
        this.Tick = 0;
        this.Iteration = 0;
        this.PlayLevel("");
    }
    PlayLevel(_code) {
        this.LoadLevel(`[{"LevelName":"Test","Author":"Ikari","Pattern":{"Name":"Pattern1","Bullets":[["0,0","GraphicType","2","EnemyBullet","-5,0.2","0.3"]],"Interval":"2","Repeat":"5"},"Enemy":{},"Level":{"0":{"SpawnAction":{"Type":"Player","Position":"0,0"}},"2":{"SpawnActon":{"Type":"Enemy","Position":"0","Enemys":[{"Graphic":"GraphicName","Health":"100","EnemyPath":[["Move","4,5","10"],["Shoot","Pattern1"]]},{"Graphic":"GraphicName","Health":"100","EnemyPath":[["Move","4,5","10"],["Shoot","Pattern1"]]}]}}}}]`);
    }
    LoadLevel(_levelJSON) {
        let _level = JSON.parse(_levelJSON);
        console.log(_level);
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
//# sourceMappingURL=Level.js.map