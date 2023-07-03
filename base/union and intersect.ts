// Union 예제
// or 연산을 떠올리면 된다.둘 중 하나의 타입을 만족하면 타입 검사에 성공한다.

type TId = string | number;

const user_id1: TId = 'migu554@naver.com';
const user_id2: TId = 1;

function printId(id: TId) {
  if (typeof id === 'string') {
    console.log('string type의 id ', id);
  } else {
    console.log('number type의 id ', id);
  }
}

console.log('Union test-------------------*');
printId(user_id1);
printId(user_id2);

// Intersect 예제
// base 타입을 정의하고 이를 확장하여 사용할 수 있다.
// 아래와 같이 재사용되는 타입을 정의할 때 사용가능하다.

type Identifier = { id: number; name: string };
type Animal = Identifier & { age: number };
type Furniture = Identifier & { price: number };

const dog: Animal = { id: 1, name: '뭉치', age: 3 };
const sofa: Furniture = { id: 2, name: '안락한 소파', price: 150000 };

function printObject(object: Animal | Furniture) {
  if ('age' in object) {
    console.log('동물의 이름은 ', object.name, ' 나이는 ', object.age);
  } else {
    console.log('가구의 이름은 ', object.name, ' 가격은 ', object.price);
  }
}

console.log('Intersect test-------------------*');
printObject(dog);
printObject(sofa);
