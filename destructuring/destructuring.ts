let rect = { 
    x: 5, 
    y: 10, 
    width: 20, 
    height: 25 
};

/*let {x, y, width, height} = rect;

console.log(x, y, width, height);*/

/*let {x, y, width: w, height: h} = rect;

console.log( x, y, w, h );*/

let { x, y, ...remaining } = rect;

console.log( x, y );
console.log( remaining );

let person = {
    firstName: "George",
    lastName: "Martin",
    prefix: "Dr"
}

function sayHi({ firstName, lastName, prefix }) {
    return `${prefix} ${firstName} ${lastName}`;
}

console.log( sayHi(person) );

let [p, q] = [ 3, 4 ];

console.log( p, q );

[p, q] = [q, p];

console.log( p, q );