var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//We use generics to accept multiple types and not lose type definition
var last = function (arr) {
    return arr[arr.length - 1];
};
var l = last([1, 2, 3]);
console.log(l);
var l2 = last(['a', 'b', 'c']);
console.log(l2);
var makeArray = function (x, y) {
    return [x, y]; //Y has a default value
};
var v = makeArray(5, 6);
var v2 = makeArray('a', 'b');
var v3 = makeArray('a', 6); //array of union, also overwritting the value's type, explicitly giving the types
//with this we can accept objects that have at least a firstName and a lastName
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
var v4 = makeFullName({ firstName: "bob", lastName: "sanchez", age: 30 }); //without the generic this woudnt be allowed
