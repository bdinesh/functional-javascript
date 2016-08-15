function sample() {
    return b();

    function b() {
        return 1 + 2;
    }
}

const repeat = (str, n) => {
    let result = '';

    if (n < 0)
        return '';

    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
};

exports.example = () => {
    console.log(sample());
};

exports.example2 = () => console.log(repeat('Dinu', -1));

//Higher Order Functions
//a function that either takes functions as arguments, or returns a function,
// or both, is referred to as a “higher-order” function.

//Combinator: A combinator is a higher-order function that uses only
// function application and earlier defined combinators to define a result from its arguments

const compose = (a, b) => {
    return (c) => a(b(c));
};

const addOne = (n) => n + 1;
const doubleOf = (n) => n * 2;

//const doubleOfAddOne = (n) => doubleOf(addOne(n));

//we can also write
const doubleOfAddOne = compose(doubleOf, addOne);

exports.higherOrderFunctions = () => {
    console.log(doubleOfAddOne(2));
};

//Function Decorators: A function decorator is a higher-order function that takes one function as an argument,
// returns another function, and the returned function is a variation of the argument function

const not = (fn) => (x) => !fn(x);


//Partial application
//Taking a function that accepts some number of arguments, binding values to one or more of those arguments,
// and returning a new function that only accepts the remaining, un-bound arguments.

const map = (array, fn) => array.map(fn);

//partial application of map
const mapWith = (fn) => (array) => map(array, fn);
const squareAll = mapWith((n) => n * n); //(array) => map(array, (n) => n * n);

exports.example3 = () => {
    const x = squareAll([1, 2, 3]);
    console.log(x);
};





