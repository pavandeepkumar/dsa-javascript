class person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getDetails(){
        return `My name is ${this.name} and my age is ${this.age}`
    }

    static getFullName()
    {
        return "pavan kumar"
    }
}


const person1 = new person("pavan", 22)


console.log(person1.getDetails())


console.log(person.getFullName())