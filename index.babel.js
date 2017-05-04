// @flow

const assert = require('assert');

module.exports = (input: number) => {
	if (!Number.isInteger(input)) {
		throw new Error('Input number isn\'t integer');
	}

	if (input % 2 === 0) {
		const returnValue = input / 2;
		assert(Number.isInteger(returnValue));
		return returnValue;
	}

	return 3 * input + 1;
};
