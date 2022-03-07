// Fulfilled 작업이 성공한 경우
// Rejected : 작업이 실패한 경우
// Pending : 작업이 진행중인 경우

/*
  프로미스 생성자 
  var promise = new Promise(function(resolve,reject){...});
*/

/*
비동기 예제
*/

function hello(){
    setTimeout(function(){
        console.log("hello")
    },2000);
}
function world(){
    setTimeout(function(){
        console.log("World");
    },1000);
}

//hello();
//world();

console.log("Executed");

/*
콜백 지옥. 
비동기 작업을 동기식으로 처리하려면 콜백함수를 중첩하여 처리하여 한다. 
중첩 정도가 올라갈수록 소스의 가독성이 현저히 떨어짐.
*/

function helloWord(){
    setTimeout(function(){
        console.log("Hello");

        setTimeout(function(){
            console.log("World");
        },1000)
    },2000);
}

//helloWord();

console.log("Executed");

/*
프로미스를 사용하면 중첩된 콜백함수를 제거할 수 있고 소스의 가독성이 좋아짐.
*/

var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello");
        resolve();
    },2000);
});

promise.then(function(){
    console.log("World");
})

console.log("Executed!!!");

/*
resolve 함수를 사용하면 프로미스를 종료시킴.
*/

var promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello2");
        resolve("World2");
        
    },1000);
})

promise2.then(function(response){
    console.log("response : ",response);
});

console.log("Executed!!2")

/*
reject 함수 호출
finally 호출
*/

var failpromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hello 3");
        reject("fail");
    },1000);
});

failpromise.then(function(response){
    console.log("success");
}).catch(function(error){
    console.log(error);
}).finally(() =>{
    console.log("finally!!")
});

console.log("Executed!!3");