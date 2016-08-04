/**
 * Created by DineshBogolu on 04-08-2016.
 */
exports.fail = function (thing) {
    //throw new Error(thing);
    console.error(['ERROR:', thing].join(' '));
};

exports.warn = function (thing) {
    console.warn(['WARNING:', thing].join(' '));
};

exports.note = function (thing) {
    console.log(['NOTE:', thing].join(' '));
};

