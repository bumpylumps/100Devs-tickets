class Animal{
    constructor(name, color){
        this._name = name
        this._color = color
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}

class Chicken extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }

    speak(){
        super.speak()
        console.log(`${this.name} sings Canon in D`)
    }
}

class Llama extends Animal{
    constructor(name,breed, color){
        super(name)
        this._color = color
        this._breed = breed
    }

    speak(){
        super.speak()
        console.log(`${this.name} sings Lady Gaga`)
    }

    spit(){
        console.log(`${this.name} spit a huge loogie`)
    }
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')
let mira = new Chicken('Mira', 'Kentucky Bluehen')
let kevin = new Llama('Kevin', 'Black', 'Suri')

let farm = [simba,machi,salem, mira]

for( a of farm ){
    a.speak()
}


kevin.spit()

// adding class properties that aren't referenced in Animal does not break it
//super can only be called once?
