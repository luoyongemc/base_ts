/**
 * TS可以在类中的属性前添加属性的修饰符

    public 修饰的属性可以在任意位置访问（修改）默认值
    private 私有属性, 私有属性只能在类内部进行访问（修改）；但可以通过在类中添加方法使得私有属性可以被外部访问
    protected 受保护的属性,只能在当前类和当前类的子类中访问(修改)
js和ts封装属性的区别

    由于属性是在对象中设置的，属性可以任意的被修改，将会导致对象中的数据变得非常不安全。因此需要对属性进行封装。

    js封装的属性存取器使用时需要调用相应的getter和setter方法；而ts封装的属性存取器使用时可直接当作变量来用就行。

    加getter和setter方法只是为了对属性的值做判断，如果不需做判断则没必要使用。

 */

(function(){
    // 定义一个表示人的类
    class Person{
        public _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        /* 
            getter 方法来读取属性
            setter 方法来设置属性
                - 他们被称为属性的存取器
        */

       /*  js中封装的属性存取器
       // 定义方法 用来获取name属性
        getName(){
            return this._name;
        }
        //  定义方法，用来设置name属性
        setName(value: string){
            this._name = value;
        }
        getAge(){
            return this._age;
        }
        setAge(value: number){
            // 判断年龄是否合法
            if(value >= 0){
                this._age = value;
            }
        } 
        */
        // TS中设置getter方法的方式
        get name(){
            console.log('get name()执行了!!');
            return this._name;
        }
        set name(value:string){
            this._name = value;
        }
        get age(){
            return this._age;
        }
        set age(value:number){
            if(value >= 0){
                this._age = value
            }
        }
    }
    const per = new Person('孙悟空', 18);

    /* 
        js封装的属性存取器使用时需要调用相应的getter和setter方法；
        而ts封装的属性存取器使用时可直接当作变量来用就行
    */
    // per._name = '猪八戒';
    // per._age = -38;
    // per.setName('猪八戒');
    // per.setAge(-33);
    // console.log(per);
    per.name = '猪八戒';
    per.age = -13
    console.log(per);
})();
