function Cat(){
    this.climb = function(){
        console.log('climb')
    }
}

function Tiger(){
    this.hunt = function(){
        console.log('hunt')
    }
}

var tiger = new Tiger()

console.log(tiger)