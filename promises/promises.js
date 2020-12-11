"use strict";
function asyncTask(callback) {
    setTimeout(function () {
        console.log("Async Task Calling Callback");
        callback();
    }, 3000);
}
asyncTask(function () { return console.log("Callback Called"); });
var asyncTask2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Resolving Promise");
        // All good
        // resolve();
        // Something went wrong
        reject();
    }, 3000);
});
asyncTask2.then(function () {
    console.log("Promise resolved");
}, function () {
    console.error("Something went wrong");
});
