class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  print() {
    console.log('My Point');
    console.log(`x: ${this.x}, y: ${this.y}`);
  }
}

class Horse extends Point {
  name: string;

  constructor(name = 'no name') {
    super();
    this.name = name;
  }

  run() {
    console.log(`start from (x: ${this.x}, y: ${this.y})`);
    console.log(`horse '${this.name}' running`);
  }
}
