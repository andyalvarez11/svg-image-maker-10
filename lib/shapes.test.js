const { Square, Triangle, Circle } = require('./shapes');

// Test cases for Square class
describe('Square', () => {
  test('Square constructor creates a square with the given side length', () => {
    const square = new Square(4);
    expect(square.sideLength).toBe(4);
  });

  test('Square area calculation is correct', () => {
    const square = new Square(5);
    expect(square.calculateArea()).toBe(25);
  });

  test('Square perimeter calculation is correct', () => {
    const square = new Square(3);
    expect(square.calculatePerimeter()).toBe(12);
  });

  // Add more test cases for Square as needed
});

// Test cases for Triangle class
describe('Triangle', () => {
  test('Triangle constructor creates a triangle with the given base and height', () => {
    const triangle = new Triangle(4, 6);
    expect(triangle.base).toBe(4);
    expect(triangle.height).toBe(6);
  });

  test('Triangle area calculation is correct', () => {
    const triangle = new Triangle(5, 8);
    expect(triangle.calculateArea()).toBe(20);
  });

  // Add more test cases for Triangle as needed
});

// Test cases for Circle class
describe('Circle', () => {
  test('Circle constructor creates a circle with the given radius', () => {
    const circle = new Circle(5);
    expect(circle.radius).toBe(5);
  });

  test('Circle area calculation is correct', () => {
    const circle = new Circle(3);
    expect(circle.calculateArea()).toBeCloseTo(28.27, 2);
  });

  // Add more test cases for Circle as needed
});
