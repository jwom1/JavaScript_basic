var pets = ['멍멍이', '야옹이', '룰루'];

console.log(`pets : ${pets}`);

//pets[3] = '어완자'; <- 좋은 코드가 아니다~ push를 써라~ 
pets.push('어완자');
pets.push('땡칠이');
console.log(`pets : ${pets}`);

var newLength = pets.push('호두', '봄이');
console.log(`pets : ${pets}, 2개 넣으면? : ${newLength}`); 

// 마지막 데이터 삭제
var deletedData = pets.pop();
console.log(`pets : ${pets}, 삭제된 데이터 : ${deletedData}`);

// 첫 번째 데이터 삭제
deletedData = pets.shift();
console.log(`pets : ${pets}, 삭제된 데이터 : ${deletedData}`);

//unshiht로 배열 첫 번째 데이터 추가하기
newLength = pets.unshift('모래', '쿠키');
console.log(`pets : ${pets}, 추가 후 길이 : ${newLength}`);