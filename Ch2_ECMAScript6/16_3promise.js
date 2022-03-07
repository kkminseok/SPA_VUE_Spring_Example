//프로미스를 반환하는 비동기 함수


function welcome(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Welcome");
            resolve();
        },3000);
    })
}

function to(){
    return new Promise(function(resolve,reject){setTimeout(function(){
        console.log("to");
        resolve();
    },2000);
})
}

function world(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        console.log("World");
        resolve("!");
    },1000);
})
};

function end(response){
    console.log(response);
}

welcome().then(function(response){
    return to();
}).then(function(response){
    return world();
}).then(function(response){
    end(response);
})