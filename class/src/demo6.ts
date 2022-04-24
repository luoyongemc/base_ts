/**
 * 接口用来定义一个类结构, 用来定义一个类中应该包含哪些属性和方法；同时接口也可以当成类型声明去使用。

    特点

    接口可以在定义类的时候去限制类的结构
    接口中所有的属性都不能有实际的值
    接口只定义对象的结构，而不考虑实际值
    在接口中所有的方法都是抽象类

接口与抽象类类似，区别在于

    抽象类可以有抽象方法也可以有普通方法；但接口只能有抽象方法
    抽象类使用extends继承；接口使用implements实现

 */

// (function() {
// 	interface myInter{
//         name: string;
        
//         sayHello(): void;
//     }
//     /* 
//         定义类时，可以使类去实现一个接口
//             实现接口就是使类满足接口的要求
//     */
//     class MyClass implements myInter{
//         name: string;

//         constructor(name: string){
//             this.name = name;
//         }

//         sayHello(){
//             console.log("大家好~~~");
//         }
//     }
// })()


// (function() {
//     interface myInterface{
//         name: string;
//         age: number;
//     }

//     interface myInterface{
//         gender: string;
//     }

//     const obj: myInterface = {
//         name: 'sss',
//         age: 111,
//         gender: '男'
//     };
// })()


//此外，对象的类型声明还有一种方法——用别名
(function() {
    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    };

	const obj: myType = {
        name: 'sss',
        age: 111,
    }

    interface MyInterface {
        name: string
        age: number
    }
    const o: MyInterface = {
        name: 'xixi',
        age: 12
    }

    class MyClass implements MyInterface {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = 'haha';
            this.age = 24
        }
    }
})()





