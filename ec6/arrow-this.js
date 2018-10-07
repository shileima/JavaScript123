let id = 10;
const luck = {
    id: 20,
    say: function(){
        let id = 30
        setTimeout(function(){
            console.log("this.id",this.id) // this == Timeout{}
        },1000)
    },
    sayWithThis(){
        console.log('sayWhithThis -> this', this)
        let id = 40;
        let that = this;
        setTimeout(function(){
            console.log("sayWithThis:",that.id)
        }, 2000);
    },
    sayWhithArrow: function(){
        console.log('sayWhithArrow -> this', this)
        setTimeout(() => {
            console.log("this.id",this.id)
        },3000)
    },
    sayWhithGlobal: () => {
        let id =50;
        console.log(this) // 箭头函数没有this，打印出 {}
        setTimeout(() => {
            console.log("this.id",this.id)
        },3000)
    }
}
luck.say()
luck.sayWithThis()
luck.sayWhithArrow()
luck.sayWhithGlobal()