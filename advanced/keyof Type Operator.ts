// keyof 연산자는 type, inteface의 key들을 union 타입으로 뽑아낸다

// 1. 일반 type 또는 interface에 keyof 사용하기
type People = { name: string; age: number; gender: 'male' | 'female' };
type keyofPeople = keyof People; // 'name' | 'age' | 'gender'
interface Animal {
  name: string;
  age: number;
}

type keyofAnimal = keyof Animal; // 'age' | 'name'

// 2. 인덱스 시그니처에 keyof 사용하기
type Arraylish = { [n: number]: unknown };
type A = keyof Arraylish; // number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // string | number

// 위와 같은 경우 string이 아닌 string | number가 되는 이유는,
// js의 객체 키는 항상 문자열 타입으로 강제되기 때문이다.

// 따라서 key가 0인 값을 넣어도 "0"으로 식별되기 때문에 number타입의 키를 허용한다.

const map: Mapish = { 0: false, '1': false, name: false };

// 3. 활용해보기
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  // K는 T 객체가 가지는 key들의 유니온 타입
  return obj[key];
}
const ME = { name: '현정', age: 23 };
console.log(getProperty(ME, 'name'));
console.log(getProperty(ME, 'height'));
// Argument of type `height` is not assignable to parameter of type `name | age`

export {};
