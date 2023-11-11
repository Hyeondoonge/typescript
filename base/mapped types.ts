// 다른 타입을 이용해 새로운 타입을 생성하는 방법

// PropertyKey를 통해 타입을 반복적으로 생성
// 결국 PropertyKey는 Type의 property들
type OptionFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionFlags<FeatureFlags>;
const featureOptions: FeatureOptions = {
  darkMode: false,
  newUserProfile: false
};

// Mapping Modifiers
// 매핑 중 readonly, ?를 추가하여 수정할 수 있음.
type ImmutableUser = {
  readonly name: string;
  readonly age: number;
};

// -, +를 사용해 readonly, ?와 같은 수정자를 추가 또는 제거할 수 있음.
// 아무 접두사도 없으면 +로 간주됨!
type Mutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

const mutableUser: Mutable<ImmutableUser> = {
  name: '현정',
  age: 23
};

mutableUser.age = 15;
