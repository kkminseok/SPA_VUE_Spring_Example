//배열의 요소를 순회

let coffeeNames = ["Americano","Cappuccino","Espresso"];

for(let name of coffeeNames){
    console.log(name);
}

//문자열 순회

let str ="kms test";

for(let ch of str){
    console.log(ch);
}

//for in처럼 객체의 프로퍼티를 열거하지 않음.

let coffee = {
    name: "Americano",
    getName: function(){
        return this.name;
    },
    setName: function(name){
        this.name = name;
    },
    display: function(){
        console.log(this.name);
    }
};

for(let prop of coffee){
    console.log(prop);
    //in인 경우 출력 가능.
}