class Animal{
    constructor(name){
        this._name = name
    }
    fly(){
        console.log('i am flying')
    }
    get name(){
        return this._name
    }
    set name(newName){
        return this._name = newName
    }
}
// let a = new Animal("bruno")
// a.fly()
// a.name = "jack"
// console.log(a.name)
// console.log(a instanceof Animal)

class Rabit extends Animal{

}
let a = new Rabit("yolo")
let c = 56
