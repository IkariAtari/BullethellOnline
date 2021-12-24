import { StartBlock } from "./Block/StartBlock";
export class Interperter {
    constructor() {
        this.KeyWords = [
            new StartBlock(),
        ];
        this.Variables = new Array();
        this.MasterBlocks = new Array();
    }
    Interpet(_code) {
        this.GenerateKeywords();
        this.Tokens = _code.split(";");
        this.Tokens = _code.split(/\s+/);
        this.MakeBlockList(this.Tokens);
    }
    GenerateKeywords() {
    }
    ProcessBlock(_type, _code, isMasterBlock, referenceBlock = undefined) {
        let _block;
    }
    MakeBlockList(_toProcess) {
        console.log(this.MasterBlocks);
    }
}
//# sourceMappingURL=Interpeter.js.map