// js에 이미 `typeof` 연산자를 통해, 전달된 값의 타입을 얻어낼 수가있다.
// ts의 `typeof`는 타입 컨텍스트에서 변수나 프로퍼티의 타입까지 추론할 수 있다.
// `keyof`와 차별점은 keyof는 type, interface에 사용하고
// `typeof`는 객체, 값과 같은 데이터에 사용한다는 것이다.

// 값으로부터 타입을 추론하여, 타입을 얻어낼 수 있다

// Object에 사용
const people = {
  name: '현정',
  age: 25
};

type People2 = typeof people; // { name: string, age: number }

// 함수에 사용
function request(body: string, url: string, id: number) {
  return new Promise((resolve) => {
    resolve({ body, url, id });
  });
}

type RequestType = typeof request; // (body: string, url: string, id: number) => Promise<unknown>

// 활용
type wonder = keyof typeof people;
// 'name' | 'age' // 그냥 keyof 한거랑 같은 결과? No 👇
// keyof는 type, interface에 대해 사용할 수 있는 키워드!
