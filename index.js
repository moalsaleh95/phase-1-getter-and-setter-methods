// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return this.radius * 2 * Math.PI;
    }

    get area() {
        return this.radius * this.radius * Math.PI;
    }

    set diameter(diameter) {
        return this.radius = diameter / 2;
    }

    set circumference(circumference) {
        return this.radius = circumference / (2 * Math.PI);
    }

    set area(area) {
        return this.radius = Math.sqrt(area / Math.PI);
    }

}

const circle = new Circle(10);
circle.circumference = 100;
console.log(circle.radius);