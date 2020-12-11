"use strict";
var add = function (a, b) {
    return a + b;
};
var addF = function (a, b) { return a + b; };
var speed = 100;
var car = {
    speed: 10,
    accelerate: function () {
        this.speed += 10;
        console.log(this.speed);
    }
};
car.accelerate();
var car2 = {
    speed: 10,
    accelerate: function () {
        setTimeout(function () {
            this.speed += 10;
            console.log(this.speed);
        }, 3000);
    }
};
car2.accelerate();
var car3 = {
    speed: 10,
    accelerate: function () {
        var _this_1 = this;
        setTimeout(function () {
            _this_1.speed += 10;
            console.log(_this_1.speed);
        }, 3000);
    }
};
car3.accelerate();
var car4 = {
    speed: 10,
    accelerate: function () {
        var _this = this;
        setTimeout(function () {
            _this.speed += 10;
            console.log(_this.speed);
        }, 3000);
    }
};
car4.accelerate();
