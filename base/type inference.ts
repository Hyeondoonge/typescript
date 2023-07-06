// 1. 프리미티브 타입
// 변수 초기화, 함수의 반환 값 설정 등의 상황에서 타입 추론이 일어난다.

let a = 3; // number
let b = 'hello'; // string
let c = ['h', 'e', 'l', 'l', 'o']; // string[]
let d = NaN; // number
let e = undefined; // any
let f = { name: 'yulmoo' }; // { name: string }

// (a: number, b: number): string
function sum(a = 1, b = 1) {
  return a + b;
}

// 2. 문맥상의 타이핑
// 코드가 어디 위치하냐에 따라 타입이 추론된다.

window.onmousedown = function (mouseEvent) {
  mouseEvent.button; // OK
  mouseEvent.hello; // propery doesn't exist on mouseEvent
};
