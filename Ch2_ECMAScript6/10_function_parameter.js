//나머지 매개변수
function add(a,b,...args){
    console.log(a,b,args);

    let sum = a + b;
    
    for(let i =0; i< args.length; i++){
        sum += args[i];
    }

    return sum;
}

let sum = add(1,2,3,4,5);

console.log(sum);

//단독 사용

function add2(...args){
    console.log(args);

    let sum = 0;

    for(let i = 0; i<args.length; i++){
        sum += args[i];
    }

    return sum;
}

let sum2 = add2(1,2,3,4,5);
console.log(sum2);

//매개변수 기본값 없을때

function add3(a,b){
    console.log("a = ",a);
    console.log("b = ",b);
    return a + b;
}

let sum3  = add3(1);
console.log(sum3)

//매개변수 기본값 사용할 때

function add4(a,b = 10){
    console.log("a = ",a);
    console.log("b = ",b);

    return a + b;
}

let sum4 = add4(1);
console.log(sum4);