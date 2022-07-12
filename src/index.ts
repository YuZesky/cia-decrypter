import libcdcore from './core';

import isNotEmptyArray from 'is-not-empty-array';
import { isObjectEmpty as isEmptyObject } from 'object-is-empty';

import { args, unknowArgs, unknowArgsError } from './utils';

import { printBanner } from './ascii-banner';

async function main() {
	console.clear();
	printBanner();

	// Unknow arg detected
	if (isNotEmptyArray(unknowArgs)) return unknowArgsError(unknowArgs);

	if (!isEmptyObject(args)) {
		// wip
		console.log('WIP');
	} else {
		let random = Math.random() * (50 - 1) + 1;
		console.log(`Rust fibonacci: ${libcdcore.fibonacci(random)}`);
	}
}

main();
