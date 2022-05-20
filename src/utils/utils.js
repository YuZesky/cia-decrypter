const { asciiBannerFilePath } = require('./constants');
const { readFileSync } = require('node:fs');
const stripColor = require('strip-color');

/**
 * @param {number} repeat
 * @returns {string}
 */
function createPadding(repeat) {
	return ' '.repeat(repeat);
}

/**
 * @param {string} stringToCenter
 * @returns {string}
 */
function centerString(stringToCenter) {
	const consoleColumns = process.stdout.columns;
	const stringToCenterLength = stripColor(stringToCenter).length;

	return createPadding(Math.round(consoleColumns / 2 - stringToCenterLength / 2)) + stringToCenter;
}

/**
 * @returns {void}
 */
function printAsciiBanner() {
	const asciiBanner = readFileSync(asciiBannerFilePath, { encoding: 'utf-8' });

	asciiBanner.split('\n').forEach((asciiBannerLine) => {
		console.log(centerString(asciiBannerLine));
	});
}

// Exports
module.exports = {
	centerString: centerString,
	printAsciiBanner: printAsciiBanner
};
