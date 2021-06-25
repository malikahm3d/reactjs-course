// const myName = 'malik'
// console.log(myName)

// const printMyName = name =>  console.log(name);
// printMyName('ahmed')


// es-6:

class Human{
    constructor(){
        this.gender = 'male'
    }

    printClassGender(){
        console.log(this.gender)
    }
}

class Person extends Human{
    constructor(){
        super()
        this.name = 'not malik'
        this.gender = 'female'
    }

    printClassName(){
        console.log(this.name)
        console.log(this.gender)
    }
  
}
const person = new Person()
person.printClassName()

class Human2{
    gender = 'male'
    
    printClassGender2 = () => console.log(this.gender)
}

class Person2{
    name2 = 'not malik es-7'
    gender = 'female es-7'

    printClassName2 = () => console.log(this.name2, this.gender)
}

const person2 = new Person2()
person2.printClassName2() 