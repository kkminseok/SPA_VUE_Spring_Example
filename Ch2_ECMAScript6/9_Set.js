let fruitSet = new Set(["Apple","Melon"]);
console.log(fruitSet);
console.log(fruitSet.size);

//data add
fruitSet.add("kms");
console.log(fruitSet);

//data has
console.log(fruitSet.has("kms"));

//data delete
fruitSet.delete("kms");
console.log(fruitSet.has("kms"));

//keys()
var keys = fruitSet.keys();
for(var key of keys){
    console.log(key);
}

//values()
var entriyiter = fruitSet.entries();
for(var entry of entriyiter){
    console.log(entry);
}

//for of
for(var fruit of fruitSet){
    console.log(fruit);
}

//foreach
fruitSet.forEach(function(value1,value2,map){
    console.log(value1 + ' : ' + value2);
})

//data clear
fruitSet.clear();
console.log(fruitSet);

