// 코드 실행 시점에 타입 지정

// 객체 형태의 타입에 제네릭
interface Item<T> {
  key: T;
  name: string;
}

const product: Item<number> = { key: 1, name: '의자' };
const ai: Item<string> = { key: 'id-2425', name: '빅스비' };

// 함수 형태의 타입에 제네릭

// 필요한 인터페이스 및 이넘 선언
interface IRequest<T> {
  (param: T): void;
}

interface createUserBody {
  email: string;
  password: string;
}

interface createPostBody {
  id: string;
  status: POST_STATE;
}

enum POST_STATE {
  'WRITING',
  'DONE'
}

// generic 타입의 변수를 가진 함수 타입 활용
// generic은 공통된 타입의 속성들이 많고, 일부 속성에 여러 타입들을 허용해야할 때
// 유용하게 쓰이겠다.

const createUser: IRequest<createUserBody> = (body) => {
  // body는 createUserBody 타입을 가진다.
};

const createPost: IRequest<createPostBody> = (body) => {
  // body는 createPostBody 타입을 가진다.
};

createUser({ email: 'migu554@naver.com', password: '1234' });
createPost({ id: '1', status: POST_STATE.DONE });

// 제네릭 제약 조건 => 상속이 가능한 제네릭의 특성을 이용해, 특정 속성들은 갖도록 보장할 수 있다.
function logText<T extends { length: number }>(text: T): T {
  console.log(text.length); // Error: T doesn't have .length
  return text;
}
