// 1~100까지 중 3의 배수만 더한 총합을 continue를 활용해  작성하세요.

var total = 0;

for(var i=1; i<=100; i++){
    if(i%3 === 0 ){
        total += i;
    }else{
        continue;
    }
}
console.log(`${total}`);

console.log(`=============위는 내가 짠거=================`);


for(var j=1; j<=100; j++){
    if(j%3 !== 0){
        continue;
    }else{
        total +=j;
    }
}
consol.log(`1~100 범위의 3의 배수만 더한 총합 : ${total}`)


