"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(wheels, color) {
        this.brand = "";
        this.color = color;
        this.wheels = wheels;
    }
    Vehicle.prototype.setColor = function (color) {
        this.color = color;
    };
    Vehicle.prototype.getColor = function () {
        return this.color;
    };
    return Vehicle;
}());
var Automobil = /** @class */ (function (_super) {
    __extends(Automobil, _super);
    function Automobil(color, brand) {
        var _this = _super.call(this, 4, color) || this;
        _this.brand = brand;
        return _this;
    }
    return Automobil;
}(Vehicle));
var a1 = new Automobil("red", "porsche");
