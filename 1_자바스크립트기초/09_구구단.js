// 2단부터 9단까지 출력하는 구구단 로직을
// 중첩 반복문을 이용해서 만들어주세요.
// 출력 양식 `a * b = (a * b)`

for(var a=2; a<=9; a++){
    console.log(` ${a}단 출력`);

    for(var b=1; b<=9; b++){
    
        console.log(` ${a}*${b} = ${a*b}`);
    }
}