interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: Array<String>
}

const developer: Developer = { name: '현정', skills: ['typescript', 'react'] }
const human: Person = { name: '현정', age: 25 }
