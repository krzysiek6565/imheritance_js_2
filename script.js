/*function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  this.calcPerimeter = function(){
    const perimeter = this.sides * this.sideLength;
    console.log(perimeter);
  }
}

let square = new Shape('square', 4, 5);
let triangle = new Shape ('triangle', 3, 3);
*/
class Shape{
  constructor(name, side, sideLength){
    this.name = name;
    this.side = side;
    this.sideLength = sideLength;
  }
  calcPerimeter(){
    const perimeter = this.sides * this.sideLength;
    console.log(perimeter);
  }
}
let square = new Shape('square', 4, 5);
let triangle = new Shape ('triangle', 3, 3);
