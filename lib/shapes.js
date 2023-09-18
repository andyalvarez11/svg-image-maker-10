class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength * this.sideLength;
  }

  calculatePerimeter() {
    return 4 * this.sideLength;
  }
}

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

module.exports = { Square, Triangle, Circle };
