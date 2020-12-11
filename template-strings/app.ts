let firstName = 'Peter';
let lastName = 'Parker';
let age = 18;

//let text = firstName + '/n' + lastName + '/n' + age;

let text = `${ firstName} 
${ lastName} 
${ age }`;

console.log( text );

let hi = `<h1>Hello</h1>
    <p>World</p>`;

document.write( hi );

let message = `The square root of 2000 is ${ Math.sqrt( 2000 )}`;

console.log( message );
