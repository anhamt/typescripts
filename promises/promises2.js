"use strict";
var firstMethod = function () {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('first method completed');
            resolve({ data: '123' });
        }, 2000);
    });
    return promise;
};
var secondMethod = function (someStuff) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('second method completed');
            resolve({ newData: someStuff.data + ' some more data' });
        }, 2000);
    });
    return promise;
};
var thirdMethod = function (someStuff) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('third method completed');
            resolve({ result: someStuff.newData + ' and even more data' });
        }, 3000);
    });
    return promise;
};
firstMethod()
    .then(secondMethod)
    .then(thirdMethod)
    .then(function (res) { return console.log(res); });
