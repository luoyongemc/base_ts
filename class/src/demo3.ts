(function (){
    // 定义一个Animal类
    class Animal{
        name: string;
        age: number;
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log('动物在叫!!');
        }
    }

    //定义一个表示狗的类
    //使Dog类继承Animal类（此时，Animal被称为父类，Dog被称为子类）
    class Dog extends Animal{
        run(){
            console.log(`${this.name}在跑啊~~`);
        }
        
        sayHello(){
            console.log('汪汪汪!!');
        }
    }

    // 定义一个猫的类
    //使Cat类继承Animal类
    class Cat extends Animal{
        sayHello(){
            console.log('喵喵喵!!');
        }
    }

    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
})();
