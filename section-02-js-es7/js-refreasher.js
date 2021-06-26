const myName = 'malik'
console.log(myName)

const printMyName = name =>  console.log(name);
printMyName('ahmed')


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


// es-7


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


// spread:
const array1 = [1, 2, 3]
const array2 = [...array1, 4, 5, 0]
console.log(array2)

// rest:
const mySort = (...arrays) => {
    return arrays.filter(el => el.length > 3)
}
console.log(mySort(array1, array2))

// destructering:
const [num1, num2] = [1, 2]
console.log(num1, num2)


// on copying:
const originalPerson = {
    name: "max",
}

// creating a storing variable makes a pointer not a copy
const personPointer = originalPerson

// spreading oringal person over copy gives us copy
const personCopy = {
    ...originalPerson
}

// change value and see
originalPerson.name = 'not max'

// name will be 'not max' i.e. updated
console.log(personPointer)
// name will be 'max' i.e. not updated
console.log(personCopy)
