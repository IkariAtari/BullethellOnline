class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static Add(a, b) {
        let c = new Point(0, 0);
        c.x = a.x + b.x;
        c.y = a.y + b.y;
        return c;
    }
    static Mult(a, b) {
        let c = new Point(0, 0);
        c.x = a.x * b;
        c.y = a.y * b;
        return c;
    }
    static Direction(a, b) {
        return new Point(b.x - a.x, b.y - a.y);
    }
    static Magnitude(a) {
        return Number(Math.sqrt((a.x * a.x) + (a.y * a.y)).toFixed(10));
    }
    static Normalize(a) {
        let mag = Point.Magnitude(a);
        //console.log("Magnitude: "+mag);
        return new Point(a.x / mag, a.y / mag);
    }
    static AngleToHeading(a) {
        let Radians = a * (Math.PI / 180);
        return new Point(Number(Math.cos(Radians).toFixed(10)), Number(Math.sin(Radians).toFixed(10)));
    }
}
//# sourceMappingURL=Point.js.map