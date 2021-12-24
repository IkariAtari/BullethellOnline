import { types } from "util";
import { Block } from "../Block/Block";
import { IRunnable } from "../Block/IRunnable";

export abstract class Statement implements IRunnable
{
    public Arguments: Array<any> = new Array<any>();
    public ParentBlock: Block;

    //public static List: 

    public Run (): void
    {
        // do action
        
    }
}