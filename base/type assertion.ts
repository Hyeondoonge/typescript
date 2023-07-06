// 타입 단언
// 특정 값에 대해 타입이 확실할 경우 'as' 키워드를 사용해서 표현할 수 있다.

// 1. DOM API 조작
const div = document.querySelector('div'); // null | HTMLDivElement (on strictMode)
div.style; // 'div' is possibly 'null'.

const assertedDiv = div as HTMLDivElement;
assertedDiv.style; // Ok!

// 2. 자동완성
interface Student {
  name: string;
  score: number;
}

let stu1 = {} as Student;
stu1.name;
stu1.score;

// ⛔️ 위와 같이 빈 객체에 대해 타입 단언이 이뤄질 경우, 예상치 못한 에러가 발생할 수 있기 때문에
//    사이드 이펙트를 고려해서 작성해야겠다.
