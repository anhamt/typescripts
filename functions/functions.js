"use strict";
function calculateDiscount(price, discount) {
    if (discount === void 0) { discount = 0.50; }
    return price * discount;
}
console.log(calculateDiscount(25));
console.log(calculateDiscount(25, 0.30));
function displayName(firstName, lastName, prefix) {
    return (prefix) ? prefix + " " + firstName + " " + lastName : firstName + " " + lastName;
}
console.log(displayName("Jhon", "Smith", "Dr"));
console.log(displayName("Jhon", "Smith"));
