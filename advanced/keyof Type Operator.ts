// keyof 연산자는 type, inteface의 key들을 union 타입으로 뽑아낸다

// 1. 일반 type 또는 interface에 keyof 사용하기
type People = { name: string; age: number; gender: 'male' | 'female' };
type keyofPeople = keyof People; // 'name' | 'age' | 'gender'
