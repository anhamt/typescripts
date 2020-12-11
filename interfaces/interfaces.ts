interface employee {
    firstName: string,
    lastName: string,
    birthDate: Date
}

function displayFullName( emp: employee ) {
    return `${ emp.firstName } ${ emp.lastName }`;
}

let emp1: employee = {
    firstName: "John",
    lastName: "Smith",
    birthDate: new Date('1975-08-21')
}

console.log( displayFullName( emp1 ) );