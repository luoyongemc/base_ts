console.log('hello ts');

let a: number = 5;

const c: boolean = false;

// b = 3;

// a = 10;
// a = 'hello'; 

function sum(a:number, b:number):number {
    return a + b;
}

console.log(sum(2,3));

let d: {name:string,a?:number,[propName:string]:any}

d ={a:1,b:'c',name:'luo'}

//元组

let h: [string,number];

h = ['hello', 123];

enum Gender {
    Male = 0,
    Female = 1
}

let i: {name: string, gender: Gender};
i = {
    name: 'xiaoming',
    gender: Gender.Male
}

type myType = 1 | 2 | 3;
let k: myType;

k = 2;



