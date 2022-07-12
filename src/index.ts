import core from './utils/core';

import isNotEmptyArray from 'is-not-empty-array';
import { isObjectEmpty as isEmptyObject } from 'object-is-empty';

import { args, printBanner, printInfo, unknowArgs, unknowArgsError, asciiBannerPath } from './utils';

async function main() {
	console.clear();
	await printBanner();

	// Unknow arg detected
	if (isNotEmptyArray(unknowArgs)) return unknowArgsError(unknowArgs);

	// Main process
	if (isEmptyObject(args)) {
		let random = Math.random() * (50 - 1) + 1;
		printInfo(`Rust fibonacci: ${core.fibonacci(random)}`);

		printInfo(`File ${asciiBannerPath} exist ? (with rust): ${String(core.fileExist(asciiBannerPath))}`);
	} else {
		// wip
		console.log('WIP');
	}
}

main();
