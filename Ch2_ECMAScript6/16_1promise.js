//비동기 함수

function welcome(){
    setTimeout(function(){
        console.log("welcome");
    },3000);
}

function to(){
    setTimeout(function(){
        console.log("to");
    },2000);
}

function world(){
    setTimeout(function(){
        console.log("World");
        end("!");
    },1000);
}

function end(response){
    console.log(response);
}

welcome();
to();
world();

console.log("Executed!!");

//콜백지옥으로 만든 함수

function welcomeToWorld(){
    setTimeout(function(){
        console.log("welcome");
        setTimeout(function(){
            console.log("to")
            setTimeout(function(){
                console.log("world");
                end("!");
            },1000)
        },2000)
    },3000)
}

welcomeToWorld();

console.log("Executed!!2");

//프로미스 사용

var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Welcome promise");
        resolve();
    },3000);
})

promise.then(function(response){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("to promise");
            resolve();
        },2000);
    });
}).then(function(response){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("World promise");
            resolve("! promise");
        },1000);
    })
}).then(function(response){
    console.log(response);
})

console.log("Promise fun Executed!!");

