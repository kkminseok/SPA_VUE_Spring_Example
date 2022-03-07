//템플릿 리터럴은 역따옴표(₩)로 묶은 문자열

//한줄 문자열
let str = `3*1 = 3`

console.log(str)

//여러줄 문자열
let multi_str = `3 * 1 = 3
3 * 2 = 6
3 * 3 = 9`

console.log(multi_str)

//플레이스 홀더 넣기
let firstnum = 3;
let secondnum = 1;
let place_str = `${firstnum} * ${secondnum} = 3`

console.log(place_str)

//표현식

let exp_place_str = `${firstnum} * ${secondnum} = ${firstnum * secondnum}`

console.log(exp_place_str)