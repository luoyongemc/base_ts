/**
 * 
 * @param a 泛型就是不确定的类型**（定义时不确定，执行了才确定）**。在定义函数或是类时,如果遇到类型不明确就可以使用泛型。
 * @returns 
 */


function fn<T>(a: T):T {
    return a;
}

let res = fn(10);//类型推断
let result = fn<string>('xiix');//显式指定泛型类型


// 泛型可以同时指定多个
function fn2<T, K>(a:T, b:K):T {
    console.log(b);
    return a;
}

fn2<number, string>(123, 'hello');


interface Inter{
    length: number;
}

// T extends Inter 表示泛型T必须是Inter实现类(子类)
// 这里用的话即调用该函数的参数必须具有length属性，可以是数组，字符串...
function fn3<T extends Inter>(a:T): number {
    return a.length
}

fn3('124');
// fn3(1243);
fn3({length: 10});



class MyClass<T>{
    name: T;
    constructor(name:T){
        this.name = name;
    }
}

const mc = new MyClass<string>('孙悟空');


