class Vehicle{
    constructor(wheels, topSpeed){
        this.wheels = wheels;
        this.topSpeed = topSpeed;
    }
    
}
let tricycle = new Vehicle( 3, 20);
console.log(tricycle.wheels, tricycle.topSpeed);

class Car{
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    setColor( color ){
        this.color = color;
    }
}

let subaru = new Car("Subaru", "Outback", 2005, "Grey");

console.log(subaru.make, subaru.model, subaru.year, subaru.color);

subaru.setColor('Red');
console.log(subaru.color)
