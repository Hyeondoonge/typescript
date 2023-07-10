// type 별칭
// 타입이나 인터페이스를 참조할 수 있는 타입
// object 뿐만 아니라 이외의 모든 형태로 정의가능

// 별칭의 용도로 사용되는 것이지, 새로운 타입을 생성하지는 않음.

// interface
// object 형태의 새로운 타입을 정의

// type vs interface
// interface 사용 가능한 기능들은 type에서도 대부분 가능함.

// 1. 확장 방식
export type Person = { name: string; age: number };
export type Develoepr = Person & { skill: string };

export interface GraphNode<T> {
  node: T;
}
export interface LeafNode<T> extends GraphNode<T> {
  parent: number;
}

// 2. 선언 병합을 이용한 새로운 속성 추가
// 선언병합? 같은 이름으로 선언된 두 개의 개별적인 선언을
// 하나로 합치는 것. => 두 선언의 기능을 모두 갖게됨

// type으로는 불가능
export type Person {
  height: number;
} // Duplicate identifier 'Person'.

// 위에 선언된 GraphNode 타입을 아래와 같이 선언 병합 => 새로운 속성 추가
export interface GraphNode<T> {
  name: string;
}

// 💭 하나의 선언에 모든 속성을 정의하면 되지않나?
// ex) styled-component 커스텀 테마 타입 설정
// module을 선언 병합합으로서 사용자 정의 테마 타입을 지정하여 사용할 수 있다!

// 3. 대상
// 인터페이스는 객체, 함수형태 타입 선언 가능
export interface Func {
  (param: string) : void;
}
export interface User {
  name: string;
  age: number;
}

// 타입은 더 넓게 가능
export type MyFunc = (param: string) => void;
export type SaleState = 'sale' | 'sold'

// ⭐️ Conclusion
// interface는 선언 병합할 수 있다.
// type은 프리미티브타입, 유니언타입까지에도 타입을 지정할 수 있다.

// 선언 병합이 필요하지 않는 경우에는 type을 사용하다가
// 필요한 경우 (ex. 선언 병합)에 인터페이스를 사용한다.
