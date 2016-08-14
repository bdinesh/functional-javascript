//Currying refers to the process of transforming a function with multiple arity into the same function with less arity.

const currier = function currier(fn) {
    var args = [].slice.call(arguments, 1);

    return function () {
        return fn.apply(this, args.concat(
            [].slice.call(arguments, 0)
        ));
    };
};

const sequence = function sequence(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
};

exports.example = () => {
    const seq5 = currier(sequence, 1);
    console.log(seq5(5));
};




