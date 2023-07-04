// 특정 값의 집합의 타입을 정의할 때 유용하다.

interface ITodo {
  name: string;
  state: TodoState;
}

enum TodoState {
  TODO,
  IN_PROGRESS,
  DONE
}

const todo1: ITodo = { name: '밥먹기', state: TodoState.DONE };
const todo2: ITodo = { name: '운동하기', state: TodoState.IN_PROGRESS };
const todo3: ITodo = { name: '양치하기', state: 0 };
