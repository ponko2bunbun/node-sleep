'use strict';

/**
 * Sleep for the specified time.
 * @param {Number} milliseconds sleep time.
 */
module.exports = (milliseconds) => {
    return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, milliseconds)
	});
}