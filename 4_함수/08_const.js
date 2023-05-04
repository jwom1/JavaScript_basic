const TODAY_SALE_RATE = 0.2;

const PI = 3.14159265;

const kim = {
    name : '김철수',
    age : 25,
};

//kim = {
//    name : '박철수';
//   age : 14;
//} -> const의 역할은 스택이 변화하는 것을 막는 것이고, 힙에서의 변화를 막지는 못한다.

kim.name = '김칠수';

console.log(kim);