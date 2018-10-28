var name = 'window'

function intro(){
    console.log('My name is ' + this.name)
}

var dog = {
    name: "癞皮狗"
}

 dog.intro = intro;

var cat = {
    name: '加菲猫'
}
// console.log(cat.intro())

// dog.intro = cat.intro;

// console.log(dog.intro())

(cat.intro=dog.intro)()