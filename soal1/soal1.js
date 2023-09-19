const areaAndPerimeter = require('./areaAndPerimeter');
const squareArea = areaAndPerimeter.squareArea(2);
const squarePerimeter = areaAndPerimeter.squarePerimeter(2);
const rectangleArea = areaAndPerimeter.rectangleArea(2, 4);
const rectanglePerimeter = areaAndPerimeter.rectanglePerimeter(2, 4);

console.log(`Square Area: ${squareArea}`);
console.log(`Square Perimeter: ${squarePerimeter}`);
console.log(`Rectangle Area: ${rectangleArea}`);
console.log(`Rectangle Perimeter: ${rectanglePerimeter}`);