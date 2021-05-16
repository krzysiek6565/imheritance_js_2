/*OOJS1

function Shape(name, sides, sideLength) {
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

OOJS2

class Shape{
  constructor(name, side, sideLength){
    this.name = name;
    this.side = side;
    this.sideLength = sideLength;
  }
  calcPerimeter(){
    const perimeter = this.side * this.sideLength;
    console.log(perimeter);
  }
}
let square = new Shape('square', 4, 5);
let triangle = new Shape ('triangle', 3, 3);
*/

// OOJS3 (Square's constructor name and side are defaulted - then we just need to state sideLength property)

class Shape{
  constructor(name, side, sideLength){
    this.name = name;
    this.side = side;
    this.sideLength = sideLength;
  }
  calcPerimeter(){
    const perimeter = this.sides * this.sideLength;
    console.log(perimeter);
  };

}
class Square extends Shape{
  constructor(sideLength){
    super('square', 5, sideLength);
    this.sideLength = sideLength;
  }
  calcArea(){
    const exponent = 2;
    const score = Math.pow(this.sideLength, exponent);
    console.log(score);
  }

}

let square = new Square(2);
