export class Input
{
    static KeysDown:Array<any> = [];

    static HandleKeys()
    {
        addEventListener("keydown", (e: KeyboardEvent) => {
            this.KeysDown[<any>e.key.toLowerCase()] = true;
        }, false);
        
        addEventListener("keyup", (e) => {
            delete this.KeysDown[<any>e.key.toLowerCase()];
        }, false);
    }
}