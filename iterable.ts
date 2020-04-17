export {}

let someArray = [1, "string", false];

//*for of loop
for(let entry of someArray){ //loops over an iterable object 
    console.log(entry);
}


let list = ["cero", "one", "two"];

//for in loop
for (let i in list) {
    console.log(i); // "0", "1", "2". returns a list of keys on the object being iterated
}

for (let i of list) {
    console.log(i); // "cero", "one", "two"
}