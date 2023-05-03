// 브라우저가 로딩되며 실행됩니다.
// prompt('안내문'); 은 입력을 받을 수 있는 구문입니다.
// while문을 이용해 1~100 사이의 범위의 값을 하나 뽑고
// up and down 형식으로 맞춰나가는 게임을 만들어주세요.

var ranNum = Math.floor(Math.random()*100+1);

var value = prompt('수를 입력해 주세요.');

while(ranNum != value){
    if(ranNum < value){
        console.log(`up`);
    }else{
        console.log(`down`);
    }
    value = prompt("다시 다음 값을 입력해주세요.");
}
console.log(`정답입니다!`);
