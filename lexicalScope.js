//Lexical scoping (sometimes known as static scoping ) is a convention used
// with many programming languages that sets the scope (range of functionality)
// of a variable so that it may only be called (referenced) from within
// the block of code in which it is defined.

const val1 = ((diameter_fn) =>
    diameter_fn(2))(
    ((PI) => (diameter) => diameter * PI)(3.14159265)
);

const val2 = ((diameter_fn) => {
    return ((PI) => {
        console.log('PI value in environment around diameter_fn:', PI);
        return diameter_fn(2);
    })(3);
})(
    ((PI) => (diameter) => {
        console.log('PI value in environment of diameter_fn passed as argument:', PI);
        return diameter * PI;
    })(3.14159265)
);

exports.example1 = function () {
    console.log(val1);
};

exports.example2 = function () {
    console.log(val2);
};


