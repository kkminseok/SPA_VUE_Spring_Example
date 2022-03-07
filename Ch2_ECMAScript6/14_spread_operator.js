//배열 리터럴 전개
const colorArray = ["red","pink","green"];
const newColorArray = [...colorArray,"orange"];

console.log(colorArray);
console.log(newColorArray);

const numArray = [2,3,4];
const newNumArray = [1,...numArray,5];

console.log(numArray);
console.log(newNumArray);


//함수 인수 목록 전개
function myPrint(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const array = [1,2,3];

console.log(array);

const stringArray = [... "xyz"];

console.log(stringArray);

myPrint(...stringArray);

//배열 연결

array.push(...[100,200]);
console.log(array);

//배열 최댓값
console.log(Math.max(...array ));