"use strict";
exports.__esModule = true;
var someArray = [1, "string", false];
//*for of loop
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) { //loops over an iterable object 
    var entry = someArray_1[_i];
    console.log(entry);
}
var list = ["cero", "one", "two"];
//for in loop
for (var i in list) {
    console.log(i); // "0", "1", "2". returns a list of keys on the object being iterated
}
for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
    var i = list_1[_a];
    console.log(i); // "cero", "one", "two"
}
