import { IRunnable } from "../Block/IRunnable";
import { Statement } from "./Statement";

export class PrintStatement extends Statement implements IRunnable
{
    public Run (): void
    {
        console.log(this.Arguments[0]);
    }

    static { console.log("Static clause test"); }
}