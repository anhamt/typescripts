"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.family = "canidae";
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        return 'Woof';
    };
    return Dog;
}());
exports.Dog = Dog;
