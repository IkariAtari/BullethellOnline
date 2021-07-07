import { GameManager } from "./Core/GameManager";

let gm = new GameManager();

function test(code:string) : void
{
    console.log(code);
    gm.CurrentLevel.PlayLevel(code);
}

window.test = test; 