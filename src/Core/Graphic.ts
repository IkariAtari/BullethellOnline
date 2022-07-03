import { GameManager } from "./GameManager";
import { Point } from "./Point";

export abstract class Graphic 
{
    Position: Point;

    Rotation: number;

    constructor() { }

    public Draw(): void { }
}