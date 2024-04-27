// 타입을 알 수 없는 경우 타입 검사 해제 효과를 위해
// any 또는 unknown 타입을 사용할 수 있다.

// any
// 아래와 같이 특정 변수를 any타입으로 지정하면
// 타입 검사 없이 연결된 속성들에 접근가능하며,
// 해당 속성들의 타입은 any타입으로 전파되는 특징을 가진다.
const name: any = 'yulmoo'
console.log(name.print()) // print is not a function

// 타입 안정성 보장을 위해 타입스크립트를 사용하는데
// any를 남용하게 되면 아래처럼 타입스크립트의 이점을 누리기 어렵다.
// 따라서 꼭 필요하지않은 경우외에 any의 사용은 권장되지 않는다.
function callPrint(object: any) {
  object.print()
}
callPrint({
  print: () => {
    console.log('hello')
  }
})
callPrint('hello') //  object.print is not a function

// unknown
// any대신 unknown를 사용하자. any와 같이 모든 타입들을 가리키지만
// 세부사항을 요구하여 타입 안정성을 제공한다.

function jsonParser(jsonString: string): unknown {
  // any => unknown
  return JSON.parse(jsonString)
}

// 타입을 정의하지않으면 result의 어느 속성에도 접근하지못하며
// 어느 속성에든 접근할 수 있게하는 any 보다 타입 안정성이 향상된다.
const result = jsonParser(`{ name: 'yulmoo' }`) as { name: string }
console.log(result.name)
console.log(result.print()) // Property 'print' does not exist on type '{ name: string; }'.

// never
// 공집합, 즉 어느 타입도 나타내지않는 타입이다.

// 아래와 같이 다른 union타입과 함께 사용하면 무시된다.
// string | number | never => string | number
const number: string | number | never = 0

// 완전한 분기를 보장한다.
// 아래처럼 default 분기로 빠지게되는 변수 타입을 never로 지정되고
// 컴파일 문제가 일어나지 않는다는 것은 이외의 분기에서 모든 경우를 처리하고있다는 말이다.
// 이후 Curriculum enum에 새로운 타입이 추가되면 컴파일 에러가 발생하는 것을 확읺라 수 있다.
enum Curriculum {
  KOREAN,
  MATH
}

function getCurriculum(c: Curriculum) {
  switch (c) {
    case Curriculum.KOREAN:
      break
    case Curriculum.MATH:
      break
    default:
      const check: never = c
      break
  }
}

// 무한 루프, 강제 종료, 예외 발생의 경우 함수의 반환값은 never타입이 된다.
// 이러한 경우 제어권이 호출한 쪽으로 반환되지않는다.
// 아래의 경우처럼 타입 내로잉에 활용될 수 있다.
const neverReturns = () => {
  // 첫 번째 줄에서 throw하는 경우
  throw new Error('Always throws, never returns')
}

let foo: string | undefined

if (!foo) {
  neverReturns()
}

foo // string
