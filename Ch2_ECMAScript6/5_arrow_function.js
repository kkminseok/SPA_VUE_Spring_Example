//작성법

/*
1. 매개변수가 없을때
*/

const f = function() {return "100"};

console.log(f());

const af = () => {return "100"};

console.log(af());

/*
2. 매개변수가 있을때
*/

const f2 = function(a) {return 100 + a};
console.log(f2(5));

const af2 = (a) => {return 100 + a};
console.log(af2(5));

const af_2 = a => {return 100 + a};
console.log(af_2(5));

/*
3. 매개변수 2개
*/

const f3 = function(a,b) { return a + b};
console.log(f3(100,10));

const af3 = (a,b) => {return a + b};
console.log(af3(100,10));

/*
4. 화살표 함수와 this
*/

const calc = {
    firstNum: 100,
    secondNum: 200,
    print: function(){
        //calc객체를 가리킴
        console.log(this);
        function add(){
            //전역 객체를 가리킴
            console.log(this);
            // 따라서 전역객체에는 first, second가 정의되어있지 않음.
            return (this.firstNum + this.secondNum);
        }
        console.log(this.firstNum + "+" + this.secondNum + "=" + add());
    }
    
}
calc.print();

//이 경우 self에 보존한다.

const calc2 = {
    firstnum: 100,
    secondnum: 200,
    print: function(){
        //지역변수 self에 this
        let self = this;
        function add(){
            console.log(self);

            return self.firstnum + self.secondnum;
        }
        console.log(this.firstnum + "+" + this.secondnum + "=" + add());
    }
}
calc2.print();

//화살표함수로 보존

const calc3 = {
    firstNum: 100,
    secondNum: 200,
    print:function(){
        const add = () => {
            //화살표 함수 표현식은 this를 함수를 정의할 때의 calc객체로 고정.
            console.log(this);

            return this.firstNum + this.secondNum;
        }
        console.log(this.firstNum + "+" + this.secondNum + "= 3번째" + add());
    }
}
calc3.print();