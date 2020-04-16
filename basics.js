"use strict";
//ts --watch to recompile after changes made 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//*Variables
var message = "Hello world";
console.log(message);
var isBegginer = true;
var x = 1;
var name = "Andres";
var sentence = "My name is " + name;
//specifyng the type. This will be useful for specifyng a contract to a function so we avoid errors giving other types
//We asure a certain bahaivor with the functions
//Another advantage is intellisense, the enviroment knows the behaivor of variables types
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//any value 
var anyValue = 10;
anyValue = true;
anyValue = "helllo";
var myVariable = 10; //we can acces properties of everytype to this variable, this will generate errors
// console.log(myVariable.name);  **This three lines will generate errors**
// myVariable();
// myVariable.toUpperCase(); 
//to tackle this issue we can use unknow, we cant acces its properties or call any unknown type
var myOtherVariable = 10;
var b = 20; //Typescript will infer b as number type
//*Lists 
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["chris", 21]; //Tuple
//*enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//*union of types
var multiType; //useful when a value is not under my control
multiType = 10;
multiType = false; //multiType is restricted to number and boolean
//*functions
var add = function (num1, num2) {
    return num1 + num2;
};
var sum = add(5, 10);
var sum2 = add(2);
console.log(sum);
console.log(sum2);
var add2 = function (num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 + num2;
};
var sum3 = add2(5, 10);
var sum4 = add2(2);
console.log(sum3);
console.log(sum4);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); //The complier only checks that the object has at least the types requiered
//*classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Andres');
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegate = function () {
        console.log("Manager " + this.employeeName + " delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.greet();
m1.delegate();
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
