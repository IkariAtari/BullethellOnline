var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Collider = /** @class */ (function () {
    function Collider() {
    }
    Collider.prototype.CheckCollision = function (a) {
        return false;
    };
    return Collider;
}());
var BoxCollider = /** @class */ (function (_super) {
    __extends(BoxCollider, _super);
    function BoxCollider(Width, Height, Position) {
        var _this = _super.call(this) || this;
        _this.Width = Width;
        _this.Height = Height;
        _this.Posistion = Position;
        return _this;
        //console.log("Collider created");
    }
    BoxCollider.prototype.CheckCollision = function (a) {
        if (this.Posistion.x < a.Posistion.x + a.Width && this.Posistion.x + this.Width > a.Posistion.x && this.Posistion.y < a.Posistion.y + a.Height && this.Posistion.y + this.Height > a.Posistion.y) {
            return true;
        }
        else {
            return false;
        }
    };
    return BoxCollider;
}(Collider));
var Canvas = document.getElementById("canvas");
var Context = Canvas.getContext("2d");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        console.log("Game instance created");
        this.CurrentLevel = new Level();
        this.timer = setInterval(function () { return _this.GameUpdate(); }, 10);
    }
    Game.Instantiate = function (GameObject) {
        Game.GameObjects[Game.GameObjects.length] = GameObject;
        //console.log(Game.GameObjects);
    };
    Game.RemoveGameObject = function (GameObject) {
        for (var i = 0; i < Game.GameObjects.length; i++) {
            if (Game.GameObjects[i].ID == GameObject.ID) {
                Game.GameObjects.splice(i, 1);
                console.log(Game.GameObjects);
            }
        }
    };
    Game.prototype.GameUpdate = function () {
        Input.HandleKeys();
        this.CurrentLevel.LogicUpdate();
    };
    Game.GameObjects = [];
    return Game;
}());
var GameObject = /** @class */ (function () {
    function GameObject(Position, Graphic, Collider, Tag) {
        if (Tag === void 0) { Tag = "none"; }
        this.Position = Position;
        this.Graphic = Graphic;
        this.Collider = Collider;
        this.Tag = Tag;
        if (GameObject.Count == null) {
            GameObject.Count = 0;
        }
        else {
            GameObject.Count += 1;
        }
        this.ID = GameObject.Count;
        //console.log(this.ID + " " + GameObject.Count);
    }
    GameObject.prototype.Start = function () {
    };
    GameObject.prototype.LogicUpdate = function () {
        this.Graphic.Position = this.Position;
        this.Collider.Posistion = this.Position;
        for (var i = 0; i < Game.GameObjects.length; i++) {
            if (Game.GameObjects[i] != this) {
                GameObject.CheckCollision(this, Game.GameObjects[i]);
            }
        }
    };
    GameObject.prototype.Draw = function () {
        this.Graphic.Draw();
    };
    GameObject.CheckCollision = function (a, b) {
        if (a.Collider.CheckCollision(b.Collider)) {
            b.OnCollision(a);
        }
    };
    GameObject.prototype.OnCollision = function (Collision) {
    };
    return GameObject;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(Posistion, Graphic, Collider) {
        var _this = _super.call(this, Posistion, Graphic, Collider) || this;
        _this.ShootTimerValue = 0;
        _this.ShootTimer = 10;
        _this.CurrentAngle = 180;
        _this.Counter = 0;
        _this.Tag = "Player";
        return _this;
    }
    Player.prototype.LogicUpdate = function () {
        _super.prototype.LogicUpdate.call(this);
        if ("arrowright" in Input.KeysDown) {
            this.Position.x += 1;
        }
        if ("arrowleft" in Input.KeysDown) {
            this.Position.x -= 1;
        }
        if ("arrowup" in Input.KeysDown) {
            this.Position.y -= 1;
        }
        if ("arrowdown" in Input.KeysDown) {
            this.Position.y += 1;
        }
        if (" " in Input.KeysDown) {
            if (this.ShootTimerValue <= 0) {
                var value = Math.sin(this.Counter);
                //console.log(value * 180);
                this.CurrentAngle = 270 + value * 10;
                //for(let i = 0; i < 4; i++)
                //{
                Game.Instantiate(new Bullet(this.Position, new Rect(5, 5, "red"), new BoxCollider(5, 5, this.Position), "PlayerBullet", Point.AngleToHeading(this.CurrentAngle), 3.5));
                //}
                this.Counter += 1;
                //console.log("Current Angle: "+this.CurrentAngle);
                this.ShootTimerValue = this.ShootTimer;
            }
            else {
                this.ShootTimerValue -= 1;
            }
        }
        else {
            this.ShootTimerValue = this.ShootTimer;
        }
    };
    return Player;
}(GameObject));
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(Posistion, Graphic, Collider, Tag, Direction, Speed) {
        var _this = _super.call(this, Posistion, Graphic, Collider) || this;
        _this.Tag = Tag;
        _this.Velocity = Point.Mult(Point.Normalize(Direction), Speed);
        return _this;
    }
    Bullet.prototype.LogicUpdate = function () {
        _super.prototype.LogicUpdate.call(this);
        // TODO: move by heading, and path
        //this.Velocity = Point.Mult(Point.Normalize(Direction), Speed);
        this.Position = Point.Add(this.Position, this.Velocity);
        if (this.Position.y <= 0) {
            Game.RemoveGameObject(this);
        }
        if (this.Position.x <= 0) {
            Game.RemoveGameObject(this);
        }
    };
    Bullet.prototype.OnCollision = function (Collision) {
        if (Collision.Tag == "Player") {
            if (this.Tag == "EnemyBullet") {
                // Hurt player
            }
        }
        if (Collision.Tag == "Enemy") {
            if (this.Tag == "PlayerBullet") {
                var enemy = Collision;
                enemy.Hurt(1);
                Game.RemoveGameObject(this);
            }
        }
    };
    return Bullet;
}(GameObject));
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(Position, Graphic, Collider, Health, Path, Speed) {
        var _this = _super.call(this, new Point(Position, -10), Graphic, Collider) || this;
        _this.isOnHold = false;
        _this.Health = Health;
        _this.Path = Path;
        _this.Speed = Speed;
        _this.Tick = 0;
        _this.Iteration = 0;
        _this.Tag = "Enemy";
        return _this;
    }
    Enemy.prototype.LogicUpdate = function () {
        _super.prototype.LogicUpdate.call(this);
        if (this.Health <= 0) {
            Game.RemoveGameObject(this);
        }
        if (this.Tick < this.Path.Actions.length) {
            if (this.Iteration == this.Path.Actions[this.Tick][1]) {
                switch (this.Path.Actions[this.Tick][0]) {
                    case "move":
                        this.Target = this.Path.Actions[this.Tick][2];
                        //console.log(Point.Normalize(Point.Direction(this.Position, this.Target)));
                        break;
                    case "speed":
                        break;
                    case "shoot":
                        var pattern = this.Path.Actions[this.Tick][2];
                        pattern.Fire(this.Position);
                        break;
                    case "StartInterval":
                        break;
                    case "StopInterval":
                        break;
                    default:
                        console.log("No valid action assigned");
                        break;
                }
                this.Tick += 1;
            }
        }
        this.Iteration += 1;
        var dir = Point.Direction(this.Position, this.Target);
        this.Position = Point.Add(this.Position, Point.Normalize(new Point(dir.x * this.Speed, dir.y * this.Speed)));
    };
    Enemy.prototype.Hurt = function (Damage) {
        this.Health -= Damage;
    };
    return Enemy;
}(GameObject));
var EnemyPath = /** @class */ (function () {
    function EnemyPath(Actions) {
        this.Actions = Actions;
    }
    return EnemyPath;
}());
var Graphic = /** @class */ (function () {
    function Graphic() {
    }
    Graphic.prototype.Draw = function () {
    };
    return Graphic;
}());
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(Length, Height, Color) {
        var _this = _super.call(this) || this;
        _this.Length = Length;
        _this.Height = Height;
        _this.Color = Color;
        return _this;
    }
    Rect.prototype.Draw = function () {
        Context.beginPath();
        Context.fillStyle = this.Color;
        Context.fillRect(this.Position.x, this.Position.y, this.Length, this.Height);
    };
    return Rect;
}(Graphic));
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.HandleKeys = function () {
        var _this = this;
        addEventListener("keydown", function (e) {
            _this.KeysDown[e.key.toLowerCase()] = true;
        }, false);
        addEventListener("keyup", function (e) {
            delete _this.KeysDown[e.key.toLowerCase()];
        }, false);
    };
    Input.KeysDown = {};
    return Input;
}());
var Level = /** @class */ (function () {
    function Level() {
        this.Patterns = [
            new Pattern(new Array(new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(-5, 0.2), 0.2), new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(-2.5, 0.2), 0.2), new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(0, 0.2), 0.2), new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(2.5, 0.2), 0.2), new Bullet(new Point(0, 0), new Rect(5, 5, "purple"), new BoxCollider(5, 5, new Point(0, 0)), "EnemyBullet", new Point(5, 0.2), 0.2)), 0)
        ];
        this.Level = [
            new LevelTick(0, new SpawnAction(new Player(new Point(40, 40), new Rect(10, 10, "green"), new BoxCollider(10, 10, new Point(40, 40))))),
            new LevelTick(500, new SpawnAction(new Enemy(100, new Rect(10, 10, "purple"), new BoxCollider(10, 10, new Point(40, 10)), 10, new EnemyPath([
                ["move", 10, new Point(150, 200)],
                ["move", 50, new Point(400, 100)],
                ["shoot", 55, this.Patterns[0]],
                ["shoot", 60, this.Patterns[0]],
                ["shoot", 70, this.Patterns[0]],
                ["shoot", 80, this.Patterns[0]],
                ["shoot", 90, this.Patterns[0]]
            ]), 0.1))),
        ];
        this.Tick = 0;
        this.Iteration = 0;
    }
    Level.prototype.LogicUpdate = function () {
        if (this.Tick < this.Level.length) {
            if (this.Iteration == this.Level[this.Tick].AtTime) {
                this.Level[this.Tick].Action.Action();
                this.Tick++;
            }
        }
        this.Iteration += 1;
        Context.clearRect(0, 0, 500, 500);
        for (var i = 0; i < Game.GameObjects.length; i++) {
            Game.GameObjects[i].LogicUpdate();
        }
        this.DrawUpdate();
    };
    Level.prototype.DrawUpdate = function () {
        for (var i = 0; i < Game.GameObjects.length; i++) {
            Game.GameObjects[i].Draw();
        }
    };
    return Level;
}());
var LevelTick = /** @class */ (function () {
    function LevelTick(AtTime, Action) {
        this.AtTime = AtTime;
        this.Action = Action;
        console.log("Initated level action at: " + this.AtTime.toString());
    }
    return LevelTick;
}());
var LevelAction = /** @class */ (function () {
    function LevelAction() {
    }
    return LevelAction;
}());
var SpawnAction = /** @class */ (function (_super) {
    __extends(SpawnAction, _super);
    function SpawnAction(Spawnable) {
        var _this = _super.call(this) || this;
        _this.Spawnable = Spawnable;
        return _this;
    }
    SpawnAction.prototype.Action = function () {
        Game.Instantiate(this.Spawnable);
    };
    return SpawnAction;
}(LevelAction));
var Pattern = /** @class */ (function () {
    //public PlayerPosition: Point;
    function Pattern(Bullets, Interval) {
        this.Bullets = Bullets;
        this.Interval = Interval;
    }
    Pattern.prototype.Fire = function (Position) {
        for (var i = 0; i < this.Bullets.length; i++) {
            this.Bullets[i].Position = Position;
            Game.Instantiate(this.Bullets[i]);
        }
    };
    return Pattern;
}());
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.Add = function (a, b) {
        var c = new Point(0, 0);
        c.x = a.x + b.x;
        c.y = a.y + b.y;
        return c;
    };
    Point.Mult = function (a, b) {
        var c = new Point(0, 0);
        c.x = a.x * b;
        c.y = a.y * b;
        return c;
    };
    Point.Direction = function (a, b) {
        return new Point(b.x - a.x, b.y - a.y);
    };
    Point.Magnitude = function (a) {
        return Number(Math.sqrt((a.x * a.x) + (a.y * a.y)).toFixed(10));
    };
    Point.Normalize = function (a) {
        var mag = Point.Magnitude(a);
        //console.log("Magnitude: "+mag);
        return new Point(a.x / mag, a.y / mag);
    };
    Point.AngleToHeading = function (a) {
        var Radians = a * (Math.PI / 180);
        return new Point(Number(Math.cos(Radians).toFixed(10)), Number(Math.sin(Radians).toFixed(10)));
    };
    return Point;
}());
var Vector = /** @class */ (function () {
    function Vector() {
    }
    return Vector;
}());
//# sourceMappingURL=game.js.map