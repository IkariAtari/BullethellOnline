import { Statement } from "./Statement";

class SpawnStatement extends Statement
{
    public Run (): void
    {
        /*if (super.ParentBlock instanceof StartBlock)
        {
            if (this.Arguments[0] == "player")
            {
                super.ParentBlock.Tick.Actions.push(new SpawnAction(new Player(new Point(40, 40), new Rect(10, 10, "green"), new BoxCollider(10, 10, new Point(40, 40)))))
            }
        }
        else
        {
            // throw error that this statement cannot be run outside a start or action block
            console.log("ERROR");
        }*/
    }
}