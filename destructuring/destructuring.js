"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
var rect = {
    x: 5,
    y: 10,
    width: 20,
    height: 25
};
/*let {x, y, width, height} = rect;

console.log(x, y, width, height);*/
/*let {x, y, width: w, height: h} = rect;

console.log( x, y, w, h );*/
var x = rect.x, y = rect.y, remaining = __rest(rect, ["x", "y"]);
console.log(x, y);
console.log(remaining);
var person = {
    firstName: "George",
    lastName: "Martin",
    prefix: "Dr"
};
function sayHi(_a) {
    var firstName = _a.firstName, lastName = _a.lastName, prefix = _a.prefix;
    return prefix + " " + firstName + " " + lastName;
}
console.log(sayHi(person));
var _b = [3, 4], p = _b[0], q = _b[1];
console.log(p, q);
_a = [q, p], p = _a[0], q = _a[1];
console.log(p, q);
