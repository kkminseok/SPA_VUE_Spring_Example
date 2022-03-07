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
