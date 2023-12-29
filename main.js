//ჯავასკრიპტის კლასები

// 2

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area (){
        console.log(this.height*this.width)
    }
    perimeter(){
        console.log( 2* (this.height+this.width)) 
    }
    isSquare(){
        if(this.height === this.width){
            console.log('it is square')
        } else {
            console.log('it is not square')
        }
    }
}

const rect1 = new Rectangle(10, 8)
rect1.area()
rect1.perimeter()
rect1.isSquare()

const rect2 = new Rectangle(5, 5)
rect2.area()
rect2.perimeter()
rect2.isSquare()


// 3

class University {
    constructor(name, department) {
        this.name;
        this.department;
    }
    removeDep (department){
        this.department = this.department.filter((depart) => depart !== department)
    }
    countLength (){
        return this.department.length
    }
}


const IBSU = new University('ibsu', ['international relations'])
IBSU.removeDep()
IBSU.countLength()


// 4

class Animals {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    makeSounds() {
        console.log(this.sounds)
    }
}

const cat = new Animals('cat', 'meow')
cat.makeSounds()
const bear = new Animals('bear', 'roar')
bear.makeSounds()

class Dog extends Animals {
    constructor(){
        super('dog', 'woof')   //ეს super დავგუგლე და ვიცი რო იძახებს მშობლის კონსტრუქტორს 
    }
}

const dog = new Dog()
dog.makeSounds()