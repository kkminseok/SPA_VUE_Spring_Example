//Map 객체 생성
let map = new Map();

//데이터 할당
let mapdata = new Map([["kms","178"], ["jyb","160"]]);

//데이터 추가
mapdata.set("Apple","red");
mapdata.set("Banana","yellow");

console.log(map);
console.log(mapdata);
//객체 수 확인
console.log(mapdata.size);

//데이터 값 읽기
console.log(mapdata.get("kms"));
//데이터 존재 확인.
console.log(mapdata.has("kms"));
//데이터 삭제
console.log(mapdata.delete("Apple"));
console.log(mapdata.has("Apple"));

//모든 키의 값 열거
var keyiter = mapdata.keys();
for(var key of keyiter){
    console.log(key);
}
//모든 값 열거
var valueiter = mapdata.values();
for (var value of valueiter){
    console.log(value);
}

//모든 데이터 열거
var entityiter = mapdata.entries();

for(var entry of entityiter){
    console.log(entry);
}
//모든 데이터 함수처리
mapdata.forEach(function(value,key,map){
    console.log(key + ":" + value);
})

//모든 데이터 삭제.
mapdata.clear();
console.log(mapdata);