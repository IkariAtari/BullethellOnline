import { GameManager } from "./Core/GameManager";
import { PrintStatement } from "./Core/Language/Statement/PrintStatement";

let gm = new GameManager();

function test(code:string) : void
{
    console.log(code);
    gm.CurrentLevel.PlayLevel(code);
    new PrintStatement();
}

window.test = test;