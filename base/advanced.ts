// 1. 튜플
// length, element 타입이 고정된 배열
const myarr: [number, number] = [1, 2]

// 2. literal

let age: 3 = 3; // 3자체가 3 이라는 타입을 가진다. (number 타입 X)

const num = 1; // const로 선언되면 변할 수 없기 때문에 literal type으로 추론된다.

const obj = {
  name: 'hyeon'
} // { name: string } 으로 타입이 고정

// 3. as const
// object, array 내부의 값들을 literal 값으로서 지정
// readonly의 성격을 가지게됨
let arr = [1, 2, 3] as const // number => [1, 2, 3]

const p6 = {x: 1, y : 2} as const;

// 4. keyof
type People = {name: string, age: number, gender: "male" | "female" };
type keyofPeople = keyof People; // 'name' | 'age' | 'gender'

// 5. typeof
// 값으로부터 타입을 추론하여, 타입을 얻어낼 수 있다
const people = {
  name: '현정',
  age: 25
}

type People2 = typeof people // { name: string, age: number }

// 활용
type wonder = keyof typeof people;
// 'name' | 'age' // 그냥 keyof 한거랑 같은 결과? No 👇
// keyof는 type, interface에 대해 사용할 수 있는 키워드!