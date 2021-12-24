import { Block } from "./Block";
import { IRunnable } from "./IRunnable";

class ActionBlock extends Block implements IRunnable
{
    //public Tick: LevelTick;

    public Run(): void
    {
        super.Run();
    }
}