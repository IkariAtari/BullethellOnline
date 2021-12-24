import { Statement } from "../Statement/Statement";
import { IRunnable } from "./IRunnable";

export class Block implements IRunnable
{
    public Commands: Array<any> = new Array<any>();

    public Run(): void
    {
        for (let i: number = 0; i < this.Commands.length; i++)
        {
            if (this.Commands[i] instanceof Statement)
            {
                this.Commands[i].Run();
            }
            else if (this.Commands[i] instanceof Block)
            {
                this.Commands[i].Run();
            }
        }
    }
}