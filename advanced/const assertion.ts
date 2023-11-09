// object, array 내부의 값들을 literal 값으로서 지정
// readonly의 성격을 가지게됨

// * const 변수로 선언하는 경우와의 차이는 참조타입에 관한 불변성도 지킨다는 것이다.

// 1. 배열에 적용
let arr = [1, 2, 3] as const; // readonly [1, 2, 3]
arr[0] = 1; // Cannot assign to '0' because it is a read-only property.
arr.push(4); // Property 'push' does not exist on type 'readonly [1, 2, 3]'.

// 2. 객체에 적용
// 예시 1
const p6 = { x: 1, y: 2 } as const; // readonly { x:1, y:2 }
p6.x = 3; // Cannot assign to 'x' because it is a read-only property.

// 예시 2
// 원래 palette의 타입이 { font: string, background: string, main: string} 으로 추론
// const assertion 적용시 string대신 literal 타입으로 추론되어, 각 속성 접근 시 색상값도 함께 확인할 수 있음.
const palette = {
  font: '#333333',
  backgroud: '#925364',
  main: '#264651'
} as const;
