"use strict";
function displayFullName(emp) {
    return emp.firstName + " " + emp.lastName;
}
var emp1 = {
    firstName: "John",
    lastName: "Smith",
    birthDate: new Date('1975-08-21')
};
console.log(displayFullName(emp1));
