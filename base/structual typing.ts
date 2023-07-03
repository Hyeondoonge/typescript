interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// 내부적 구조가 동일하면 동일한 타입을 가졌다고 판단한다.
const point = { x: 12, y: 26 };
logPoint(point);