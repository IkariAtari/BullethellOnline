class Point 
{
    x: number;
    y: number;

    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
    }

    public static Add(a: Point, b: Point): Point
    {
        let c = new Point(0, 0);

        c.x = a.x + b.x;
        c.y = a.y + b.y;

        return c;
    }

    public static Mult(a: Point, b: number): Point
    { 
        let c = new Point (0, 0)
        
        c.x = a.x * b;
        c.y = a.y * b;

        return c;
    }

    public static Direction(a: Point, b: Point): Point
    {
        return new Point(b.x - a.x, b.y - a.y);
    }

    public static Magnitude(a: Point): Number
    {
        return Number(Math.sqrt((a.x * a.x) + (a.y * a.y)).toFixed(10));
    }

    public static Normalize(a: Point): Point
    {
        let mag = Point.Magnitude(a) as number;

        //console.log("Magnitude: "+mag);

        return new Point(a.x / mag, a.y / mag);
    }

    public static AngleToHeading(a: number): Point
    {
        let Radians = a * (Math.PI / 180);

        return new Point(Number(Math.cos(Radians).toFixed(10)), Number(Math.sin(Radians).toFixed(10)));
    }
}