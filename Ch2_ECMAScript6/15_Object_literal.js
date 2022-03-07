//객체 리터럴

const coffee = {
    name : "Americano",
    price : 3000
};

console.log(coffee)
console.log(coffee.name);
console.log(coffee.price);

const coffee2 = {
    "name" : "Ameircano",
    "price" : 3000
}

console.log(coffee2);
console.log(coffee2.name);
console.log(coffee2.price);

const coffee3 = {
    'name' : 'Americano',
    'price' : 3000
}

console.log(coffee3)
console.log(coffee3.name)
console.log(coffee3.price)

const key1 = "name";
const key2 = "price";

const coffee4 = {
    key1 : 'Americano',
    key2 : 3000
};

console.log(coffee4)
console.log(coffee4.name)
console.log(coffee4.price)
console.log(coffee4.key1)
console.log(coffee4.key2)

const coffee5 = {
    [key1] : 'Americano',
    [key2] : 3000
}

console.log(coffee5)
console.log(coffee5.name)
console.log(coffee5.price)
console.log(coffee5.key1)
console.log(coffee5.key2)

//객체 변수 이름과 속성 이름이 같으면 생략해서 입력해도 됨.
const name = "Americano";
const price = 3000;

const coffee6 = {
    name : name,
    price : price
}

console.log(coffee6)

const coffee7 = {name, price}

console.log(coffee7)