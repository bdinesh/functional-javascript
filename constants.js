const fn = (diameter) => {
    const PI = 3.14159265;

    (() => {
        const PI = 3;
        console.log('Value of PI in inner function ', PI);
    })();

    console.log('Value of PI in outer function ', PI);

    return diameter * PI;
};

const fn2 = ((diameter) => {
    const PI = 3.14159265;

    if (true) {
        //This PI constant scope is defined within the if block
        // and is different from PI constant defined in function scope
        const PI = 3;
    }

    return diameter * PI;
})(2);

exports.example1 = () => {
    console.log(fn(2));
    console.log(fn2);
};
