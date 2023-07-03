// 1번째 예제
interface User {
  age: number;
  created_at: Date;
}

interface Users{
  [id: string]: User
}


const dict: Users = {};
const user1: User = { age: 15, created_at: new Date() } 

dict['migu554@naver.com'] = user1;

// 2번째 예제
interface Product {
  name: string;
  price: number;
}

interface Products {
  [id: string | number]: Product
}

const product_dict: Products = {};
product_dict[1] = { name: '이어 플러그', price: 1000 }
product_dict['2'] = { name: '샐러드', price: 5500 }

