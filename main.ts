//ts --watch to recompile after changes made 

//This file is treated as a script not a as module
//script share a global scope, modules have their own scope
//Becuase of this variables are shown as being redeclared, we need an export statement 
export {} //export statement to treat this file as a module


//*Variables
let message = "Hello world";
console.log(message);


let isBegginer: boolean = true; 
let x: number = 1; 
let name: string = "Andres";
let sentence: string = `My name is ${name}`;
//specifyng the type. This will be useful for specifyng a contract to a function so we avoid errors giving other types
//We asure a certain bahaivor with the functions
//Another advantage is intellisense, the enviroment knows the behaivor of variables types
console.log(sentence);

let n: null = null;
let u: undefined = undefined;
let isNew: boolean = null;
let myName: string = undefined

//any value 
let anyValue: any = 10; 
anyValue = true;
anyValue = "helllo";

let myVariable: any = 10; //we can acces properties of everytype to this variable, this will generate errors
// console.log(myVariable.name);  **This three lines will generate errors**
// myVariable();
// myVariable.toUpperCase(); 
//to tackle this issue we can use unknow, we cant acces its properties or call any unknown type

let myOtherVariable: unknown = 10;

let b = 20; //Typescript will infer b as number type


//*Lists 
let list1: number[] = [1,2,3];
let list2: Array<number> =[1,2,3];
let person1: [string, number] = ["chris", 21] //Tuple

//*enum 
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

//*union of types
let multiType: number | boolean; //useful when a value is not under my control
multiType = 10; 
multiType = false; //multiType is restricted to number and boolean

//*functions

const add = (num1: number, num2?: number): number => { //num2 is optional
    return num1 + num2;
}

let sum = add(5,10);
let sum2 = add(2);
console.log(sum);
console.log(sum2);

const add2 = (num1: number, num2: number = 2): number => { //num2 has a default value
    return num1 + num2;
}

let sum3 = add2(5,10);
let sum4 = add2(2); 
console.log(sum3);
console.log(sum4);


//*interfaces
interface Person {
    firstName: string, 
    lastName: string
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName:'Bruce',
    lastName:'Wayne'
}
fullName(p);

//*classes

class Employee {
    protected employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    public greet(){
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Andres');
emp1.greet();

class Manager extends Employee{

    constructor(managerName: string){
        super(managerName);
    }

    public delegate(){
        console.log(`Manager ${this.employeeName} delegating tasks`)
    }
}

let m1 = new Manager('Bruce');
m1.greet();
m1.delegate();

