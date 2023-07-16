interface Point {
  x: number;
  y: number;
}

class Character implements Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = y;
    this.y = y;
  }
}

class Horse extends Character {
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
