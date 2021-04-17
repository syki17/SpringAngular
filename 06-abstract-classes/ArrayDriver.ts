import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myCircle = new Circle(10,15,20);
let myRectangle = new Rectangle(0,0,3,5);

// declare an array of shapes that will be initially empty
let theShapes: Shape[] = [];

// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes) {
    console.log(tempShape.getInfo());   
    console.log(tempShape.calculateArea());
    console.log();
    
}