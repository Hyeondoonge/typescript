// 타입 가드
// 유니온 연산을 통해 파라미터 받는 경우,
// 기본적으로 교집합에 속하는 속성들만 자동완성된다.

// 1. in
export interface Flower {
  id: number;
  name: string;
  leave: number;
}

export interface Animal {
  id: number;
  name: string;
  leg: number;
}

function printObject(object: Flower | Animal) {
  object.id; // ok
  object.name; // ok

  // 속성 접근에 실패
  // object.leg; // Property 'leg' does not exist on type 'Flower | Animal'.

  if (isFlower(object)) {
    object.leave; // ok
  } else {
    object.leg;
  }
}

// 타입 가드를 위해 검사 코드를 추상화했다. => 추후 재사용가능
function isFlower(object: Flower | Animal): object is Flower {
  return 'leave' in object;
}

// 2. type of
// number, bigint, boolean, undefined, object, function, symbol
// string ...

function print(str: string | object | undefined) {
  if (typeof str === 'string') {
    console.log(str.length);
  } else {
    console.log(`you can only enter what type is string`);
  }
}

// 3. 외에도 instance of로 가능
