class Car {
  constructor(name,distance){
    this.name=name
    this.distance=distance
  }
  carDistance(){
    return `${this.name} had travelled for ${this.distance} miles`
  }
}
let Car1 = new Car('Audi', 100);
const msg = Car1.carDistance();
console.log(msg);
