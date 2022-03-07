// - 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값

const LINE = Symbol();
const RECTANGLE = Symbol();

if(LINE === RECTANGLE){
    console.log("LINE === RECTANGLE");
}else{
    console.log("LINE !== RECTANGLE");
}

// - 심볼에 설명을 인수로 전달 가능.
//설명이 같아도 값은 다름

const TEST = Symbol("test");
const TEST2 = Symbol("test");

if(TEST === TEST2){
    console.log("test === test2");
}else{
    console.log("test !== test2");
}
// - 설명 확인 법

console.log(TEST.toString());
console.log(LINE.toString());

// - 상수 사용 하지만 의미없는 다른 값을 사용하면 코드해석에 문제가 생길 수 있다.

const LINE_ = 0;
const RECTANGLE_ = 1;

console.log(LINE_);
console.log(RECTANGLE_);

let shape = LINE_;

if(shape === LINE_){
    console.log("shape === LINE_");
}else{
    console.log("shape !== LINE_");
}

//정의한 상수값과 같은 숫자를 사용해도됨.
if(shape === 0){
    console.log("shape === LINE_");
}else{
    console.log("shape !== LINE_");
}

// - 심볼 사용
// 정의한 심볼 값만 사용.
const LINE3 = Symbol("line");
const RECTANGLE3 = Symbol("rectangle");

console.log(LINE3.toString());
console.log(RECTANGLE3.toString());

let shape3 = LINE3;

if(shape3 === LINE3){
    console.log("shape3 === LINE3");
}else{
    console.log("shape3 !== LINE3");
}