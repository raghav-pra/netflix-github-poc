var privatePrefix = require("./../internal/privatePrefix");

/**
 * Determined if the key passed in is an internal key.
 *
 * @param {String} x The key
 * @private
 * @returns {Boolean}
 */
module.exports = function isInternalKey(x) {
    return x === "$size" || x.lastIndexOf(privatePrefix, 0) === 0;
};
