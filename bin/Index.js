import { GameManager } from "./Core/GameManager";
let gm = new GameManager();
function test(code) {
    console.log(code);
    gm.CurrentLevel.PlayLevel(code);
}
window.test = test;
//# sourceMappingURL=Index.js.map