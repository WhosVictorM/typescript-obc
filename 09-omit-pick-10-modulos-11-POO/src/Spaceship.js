var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spaceship = /** @class */ (function () {
    function Spaceship(name, captain) {
        this.name = name;
        this.captain = captain;
        this.speed = 0;
    }
    Object.defineProperty(Spaceship.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Spaceship.prototype.accelerate = function (rate, time) {
        this.speed = rate * time;
    };
    return Spaceship;
}());
var Fighter = /** @class */ (function (_super) {
    __extends(Fighter, _super);
    function Fighter(name, captain, weapons) {
        var _this = _super.call(this, name, captain) || this;
        _this.weapons = weapons;
        return _this;
    }
    Fighter.prototype.shoot = function () {
        for (var i = 0; i < this.weapons; i++) {
            console.log("Pew!");
        }
    };
    Fighter.prototype.erase = function () {
        this.name = "";
        this.captain = "";
        this.speed = 0;
    };
    return Fighter;
}(Spaceship));
var ship = new Spaceship("USS Enterprise", "James T. Kirk");
var fighter = new Fighter("X-Wing", "Luke Skywalker", 10);
fighter.accelerate(50, 10);
ship.accelerate(50, 10);
console.log(ship.name);
