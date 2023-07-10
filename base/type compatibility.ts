// 타입 호환
// 구조적 타이핑 방식 -> TS에서 타입 호환 여부를 판단
// 이때, 구조를 보고 동일하면 호환 가능하게 봄.
export interface Point {
  x: number;
  y: number;
}

// 변수 p1를 선언해준다 (초기화하지 않은 상태)
let p1: Point;
let p2 = { x: 3, y: 5, z: 10 };

// p2는 구조적으로 Point의 속성들을 포함하고 있어 성공적으로 컴파일됨.
p1 = p2;
// p1은 x, y를 갖고있기 때문에(구조적으로 봐야함) 실패함.
p2 = p1;
// z를 추가해줌으로서 p2의 본래 구조에 맞게 값이 성공적으로 할당됨.
p2 = { ...p1, z: 3 };