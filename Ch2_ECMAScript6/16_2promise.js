//프로미스와 비동기 함수 사용

function welcome(resolve,reject){
    setTimeout(function(){
        console.log("Welcome");
        resolve();
    },3000);
}

function to(resolve,reject){
    setTimeout(function(){
        console.log("to");
        resolve();
    },2000);
}

function world(resolve,reject){
    setTimeout(function(){
        console.log("World");
        resolve("!");
    },1000);
}

function end(response){
    console.log(response);
}

var promise = new Promise(function(resolve,reject){
    welcome(resolve,reject);
})

promise.then(function(response){
    return new Promise(function(resolve,reject){
        to(resolve,reject);
    })
}).then(function(response){
    return new Promise(function(resolve,reject){
        world(resolve,reject)
    })
}).then(function(response){
    end(response);
})

