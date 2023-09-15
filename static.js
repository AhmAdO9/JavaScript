class Animal{
    constructor(boing){
        this.name = boing
    }
    walk(){
        console.log(Animal.capitalize(this.name) +" is walking")
    }
    static capitalize(x){
        return x.charAt(0).toLowerCase() + x.substr(1)
    }
}

j = new Animal("swati")
j.walk()
