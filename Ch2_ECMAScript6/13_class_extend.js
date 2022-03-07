class Coffee{
    constructor(){
        this.name = "Americano";
        Coffee.salesVolume++;
    }
    //정적 프로퍼티


    getName(){
        return this.name;
    }

    setName(name){
        this.name =name;
    }

    display(){
        console.log(this.name);
    }

    //정적 메서드
    static getSalesVolume(){
        return Coffee.salesVolume;
    }

    toString(){
        throw new Error("You have to implement the method doSomething!");
    }
}

//정적 프로퍼티 초기화
Coffee.salesVolume = 0;

let coffee = new Coffee();

console.log(coffee.name);
console.log(coffee.getName());
coffee.display();

//정적 메서드 호출
console.log(Coffee.getSalesVolume());

coffee = new Coffee("Milk Tea");
console.log(Coffee.getSalesVolume());


//클래스 확장

class Espresso extends Coffee{
    constructor(){
        super();
    }
    //메서드 재정의
    toString(){
        return "Espresso Method";
    }
}

let expresso = new Espresso();
expresso.setName("Espresso");
console.log(expresso.name);
console.log(expresso.getName());
expresso.display();

console.log(expresso.toString());