

// Abstraction

class Employee{
    constructor(firstName,lastName,job){
        this._firstName = firstName;
        this._lastName = lastName;
        this.skills = [];
        this.job = job;
        Employee._count++;

        //job

        this.company;
        this.position;
        this.salary;
    }
    static _count = 0;

    learn(skill){
       this.skills.push(skill);                       
    }
}


class Job{
    constructor(company,position,salary){
        this._company = company;
        this._position = position;
        this._salary  = salary;
    }                          
}

const john = new Employee("Jhon","Gr",new Job("Ustech","developer",100));

console.log(john);

john.learn("oop programming");

console.log(john);


//void --> return olmayan fonksiyon





