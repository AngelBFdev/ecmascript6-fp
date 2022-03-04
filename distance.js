class Point{
  constructor(a,b){
    this.x=a;
    this.y=b;
  }
  distance(){
    var z=this.x - this.y
    return Math.abs(z);
  }
}

var point= new Point(1,5);
console.log(point.distance())
point= new Point(4,1);
console.log(point.distance())
