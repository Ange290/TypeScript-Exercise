class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    area(): number{
        return this.width * this.height;
    }
}
const bb = new Rectangle(3,68);
console.log(bb.area());