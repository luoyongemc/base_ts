
//食物类
class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }
    //获取食物的坐标
    get X() {
        return this.element.offsetLeft;
    }

    
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物位置
    change(){
        // 生成一个随机的位置
        // 食物的位置最小是0， 最大是290
        // 蛇移动一次就是一格，一格大小就是10，所以要求食物的坐标必须是整10

        // Math.round(Math.random() * 290);//生成一个[0,290]的整数
       let top = Math.round(Math.random() * 29) * 10;
       let left = Math.round(Math.random() * 29) * 10;
        // Math.floor(Math.random() * 30) * 10;//向下取整

        this.element.style.left = top + 'px';
        this.element.style.top = left + 'px';
    }

}

export default Food;