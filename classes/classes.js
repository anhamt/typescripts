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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Person;
}());
var person1 = new Person("George", "Martin", new Date("2019-08-03"));
console.log(person1.getFirstName());
person1.setFirstName("Brandon");
console.log(person1.getFirstName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, birthDate, department) {
        var _this = _super.call(this, firstName, lastName, birthDate) || this;
        _this.department = "";
        if (department)
            _this.department = department;
        return _this;
    }
    Employee.prototype.setDepartment = function (department) {
        this.department = department;
    };
    Employee.prototype.getDepartment = function () {
        return this.department;
    };
    Employee.prototype.sayFullName = function () {
        return this.getFirstName() + " " + this.getLastName();
    };
    return Employee;
}(Person));
var emp1 = new Employee("Mary Jane", "Watson", new Date("1965-06-01"));
