type numArray = Array<number>; 
type stringArray = Array<string>; 

//We use generics to accept multiple types and not lose type definition
const last = <T>(arr: Array<T>): T => {  //generating a generic array, it doesn't know which type is going to recive
    return arr[arr.length - 1];
}

const l = last([1,2,3]);
console.log(l); 

const l2 = last(['a','b','c']);
console.log(l2); 

const makeArray = <X, Y = number>(x: X, y: Y): [X, Y] =>{ //X and Y were name abstractly, we use them to recive any type value
    return [x, y]; //Y has a default value
};

const v = makeArray(5, 6);
const v2 = makeArray('a', 'b');
const v3 = makeArray<string | null, number>('a', 6); //array of union, also overwritting the value's type, explicitly giving the types

//with this we can accept objects that have at least a firstName and a lastName
const makeFullName = <T extends { firstName: string, lastName: string}>(obj: T) => { 
    return{
        ...obj, //keeping all ther properties aside firstName and LastName
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

const v4 = makeFullName({firstName: "bob", lastName: "sanchez", age: 30}); //without the generic this woudnt be allowed

interface Tab<T> {
    id: string;
    position: number;
    data: T; //using the generic on data beacuase it wont know which type the data will be 
}

type numberTab = Tab<number>; //making a type numberTab. data is now a number type 
type stringTab = Tab<number>; //data is a sting type
