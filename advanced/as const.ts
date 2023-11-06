// object, array 내부의 값들을 literal 값으로서 지정
// readonly의 성격을 가지게됨
let arr = [1, 2, 3] as const; // number => [1, 2, 3]

const p6 = { x: 1, y: 2 } as const;
