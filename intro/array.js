/**
 * Created by DineshBogolu on 04-08-2016.
 */
const _ = require('underscore');
const logger = require('./logger');

function isIndexed(data) {
    return _.isArray(data) || _.isString(data);
}

exports.nth = function (data, index) {
    if (!isIndexed(data)) {
        logger.fail('Invalid argument, data');
        return;
    }

    if (!_.isNumber(index) || index > data.length - 1) {
        logger.fail('Invalid argument, index');
        return;
    }

    return data[index];
};