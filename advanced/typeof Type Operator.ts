// 값으로부터 타입을 추론하여, 타입을 얻어낼 수 있다
const people = {
  name: '현정',
  age: 25
};

type People2 = typeof people; // { name: string, age: number }

// 활용
type wonder = keyof typeof people;
// 'name' | 'age' // 그냥 keyof 한거랑 같은 결과? No 👇
// keyof는 type, interface에 대해 사용할 수 있는 키워드!
