import { Statement } from "../Statement/Statement";
export class Block {
    constructor() {
        this.Commands = new Array();
    }
    Run() {
        for (let i = 0; i < this.Commands.length; i++) {
            if (this.Commands[i] instanceof Statement) {
                this.Commands[i].Run();
            }
            else if (this.Commands[i] instanceof Block) {
                this.Commands[i].Run();
            }
        }
    }
}
//# sourceMappingURL=Block.js.map