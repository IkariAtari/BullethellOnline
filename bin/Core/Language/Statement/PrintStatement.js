import { Statement } from "./Statement";
export class PrintStatement extends Statement {
    Run() {
        console.log(this.Arguments[0]);
    }
}
{
    console.log("Static clause test");
}
//# sourceMappingURL=PrintStatement.js.map