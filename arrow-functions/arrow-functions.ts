let add = function( a: number, b: number ) {
    return a + b;
}

let addF = ( a: number, b: number ) => a + b;

let speed = 100;

let car = {
    speed: 10,
    accelerate: function() {
        this.speed += 10;
        console.log( this.speed );
    }
}

car.accelerate();

let car2 = {
    speed: 10,
    accelerate: function() {
        setTimeout( function() {
            this.speed += 10;
            console.log( this.speed );
        }, 3000)        
    }
}

car2.accelerate();

let car3 = {
    speed: 10,
    accelerate: function() {
        setTimeout( () => {
            this.speed += 10;
            console.log( this.speed );
        }, 3000)        
    }
}

car3.accelerate();

let car4 = {
    speed: 10,    
    accelerate: function() {
        let _this = this;
        setTimeout( function() {
            _this.speed += 10;
            console.log( _this.speed );
        }, 3000)        
    }
}

car4.accelerate();