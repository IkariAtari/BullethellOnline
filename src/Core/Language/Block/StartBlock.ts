import { Block } from "./Block";
import { IRunnable } from "./IRunnable";

/*
 * There always needs to be one start block in the level
 */
export class StartBlock extends Block implements IRunnable
{
    //public Tick: LevelTick = new LevelTick(0);

    public RunBlock (): void
    {
        super.Run();
    }
}