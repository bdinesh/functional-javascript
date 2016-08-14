const _ = require('underscore');

const splat = function (fn) {
    return function (array) {
        return fn.apply(null, array);
    };
};

const unsplat = function (fn) {
    return function () {
        return fn.call(null, _.toArray(arguments));
    };
};

function add() {
    var addArray = splat(function (a, b) {
        return a + b;
    });

    return addArray([1, 2]);
}

console.log(add(1, 2));

const joinElements = unsplat(function (array) {
    return array.join(' ');
});

console.log(joinElements(1, 2, 3));