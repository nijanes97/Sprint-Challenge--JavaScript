// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass{
    constructor(attributes){
        this.length = attributes.length,
        this.width = attributes.width,
        this.height = attributes.height
    }
    volume() {
        return this.length * this.width * this.height;
    };
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
}

const cuboidClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass{
    constructor(attributes){
        super(attributes);
    }
    volume(){
        if(this.length === this.width && this.length === this.height){
            return Math.pow(this.length, 3);
        }
        else{
            return `Not a cube`;
        }
    }
    surfaceArea(){
        if(this.length === this.width && this.length === this.height){
            return 6 * Math.pow(this.length, 2);
        }
        else{
            return `Not a cube`;
        }
    }
}

const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
});

console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96