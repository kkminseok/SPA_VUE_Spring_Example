/*
1.비구조화 할당 이전 방식
*/

//객체의 프로퍼티별로 따로 변수를 선언하여 값을 할당한다.
let coffee = {
    name: "Americano",
    price: 3000
}

let coffeeName;
let coffeePrice;

coffeeName = coffee.name;
coffeePrice = coffee.price;

console.log(coffeeName);
console.log(coffeePrice);

//구조화 방식

let {name: coffeeName_struct, price: coffeePrice_struct, caffeine : coffeeCaffeine, salt: coffeeSalt = 500} = coffee;

console.log(coffeeName_struct);
console.log(coffeePrice_struct);

//프로퍼티가 없을 경우 undefined로 뜸.

console.log(coffeeCaffeine);

//프로퍼티 기본값 출력.
console.log(coffeeSalt);

// let{name,coffee}=  coffee로 프로퍼티 이름 생략이 가능.