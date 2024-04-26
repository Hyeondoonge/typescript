// 비슷한 유형의 상수값들을 정의할 때 유용하다.
interface ITodo {
  name: string
  state: TodoState
}

enum TodoState {
  TODO,
  IN_PROGRESS,
  DONE
}

const todo1: ITodo = { name: '밥먹기', state: TodoState.DONE }
const todo2: ITodo = { name: '운동하기', state: TodoState.IN_PROGRESS }
const todo3: ITodo = { name: '양치하기', state: 0 }

// 다음 const enum과 위의 enum와의 차이점은
// reverse mapping되지않으며, 즉시 실행함수를 만들지 않는다는 것이다.
const enum Direction {
  RIGHT,
  LEFT
}

const d1: Direction = Direction.RIGHT
const d2: Direction = Direction.LEFT

// 이 밖에도 enum, const enum과 자주 비교되는게 union이나 as const이다.

// as const는 enum과 비슷한 목적으로 사용될 수도 있고 더 확장해서 사용할 수도 있다.
// 내부의 속성값들은 모두 readonly 타입이 되어버린다.

// enum과 달리 거의 선언된 그대로 트랜스파일되며, 즉시 실행함수를 만들지 않는다.
// 하지만 enum, const enum과의 차이는 key, value 쌍의 데이터가 필수라는 것과
// 마우스를 타입에다 갖다대면 리터럴값을 바로 확인할 수 있다는 것이다.
const COLORS = {
  text: '#828282',
  warning: '#ea2c2c',
  success: '#2dd285'
} as const

const VADLIATION_MESSAGE = {
  PASSWORD: {
    REQUIRED: '비밀번호는 필수값입니다',
    PATTERN_MISMATCH: ''
  },
  EMAIL: {
    REQUIRED: '이메일은 필수값입니다',
    PATTERN_MISMATCH: '이메일은 @ 및 최상위 도메인이 포함되어야 합니다'
  },
  BIRTH: {
    PATTERN_MISMATCH: '생년월일은 YYYY-MM-DD 형식이어야 합니다'
  }
} as const
