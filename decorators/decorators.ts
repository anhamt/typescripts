function log( constructor: Function ) {
    console.log( "Constructor log" );
}

function authorize(target: Object, 
    propertyKey: string, 
    descriptor: TypedPropertyDescriptor<any>): any {

    console.log('target:', target);
    console.log('propertyKey:', propertyKey);
    console.log('descriptor:', descriptor);

    // save a reference to the original method
    let originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        // pre
        console.log('New method..');
        console.log('The method args are: ' + JSON.stringify(args));

        // run and store the result
        let result = originalMethod.apply(this, args);

        // post
        console.log('The return value is: ' + result);

        // return the result of the original method
        return result;
    };

    return descriptor;
}

@log
class Test {
    constructor() {}

    @authorize
    hello( name: string ): string {
        return "Hello " + name;
    }
}

let t = new Test();
t.hello("Victor");