// 타입 호환

/// 구조적 타이핑 -> TS에서 타입 호환 여부를 판단하는 방식
export interface Point {
  x: number;
  y: number;
}

// 변수 p1를 선언해준다 (초기화하지 않은 상태)
let p1: Point;
let p2 = { x: 3, y: 5, z: 10 };

// p2는 구조적으로 Point의 속성들을 포함하고 있어 성공적으로 컴파일됨.
p1 = p2;
